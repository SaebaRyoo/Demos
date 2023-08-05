const fs = require("fs");
const XLSX = require("xlsx");

// 读数据
function readJSONFiles(localesPath) {
  const data = {};
  fs.readdirSync(localesPath).forEach((file) => {
    const lang = file.split(".")[0];
    data[lang] = JSON.parse(fs.readFileSync(`${localesPath}/${file}`, "utf-8"));
  });

  return data;
}

// 通过eval获取到对应层级的值
function getI18nValue(data, key) {
  try {
    return eval(`data.${key}`);
  } catch (e) {
    console.error(`Error getting i18n value for "${key}"`, e);
    return null;
  }
}

// 展平数据
function flattenJSON(obj, parentKey = "", lang) {
  const result = [];

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];

      // 拼接当前节点key和父节点的key
      const currentKey = parentKey ? `${parentKey}.${key}` : key;

      if (typeof value === "object") {
        // 如果是对象，递归处理
        result.push(...flattenJSON(value, currentKey, lang));
      } else {
        // 如果是当前节点的最深节点的值，则添加到数组中
        result.push({ name: currentKey, [lang]: value });
      }
    }
  }

  return result;
}

function mergeArraysfromData(data) {
  const mergedMap = {};

  // 遍历data对象的每个语言版本的数组
  for (const lang in data) {
    if (data.hasOwnProperty(lang)) {
      data[lang].forEach((item) => {
        mergedMap[item.name] = { ...mergedMap[item.name], ...item };
      });
    }
  }

  const mergedArray = Object.values(mergedMap);

  return mergedArray;
}

function i18nToExcel(data, i18nKey) {
  const flattenedTargetData = {};

  Object.keys(data).forEach((lang) => {
    const targetValue = getI18nValue(data, `${lang}.${i18nKey}`);

    const flattenedData = flattenJSON(targetValue, i18nKey, lang);

    flattenedTargetData[lang] = flattenedData;
  });

  const mergedArray = mergeArraysfromData(flattenedTargetData);

  // 创建sheet
  const sheet = XLSX.utils.json_to_sheet(mergedArray, { origin: "A1" });
  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, sheet, "i18n");
  XLSX.writeFile(workbook, "i18n.xlsx");
}

function main() {
  const localesPath = "./locales";
  const i18nKey = process.env[2] || "features";

  const i18nData = readJSONFiles(localesPath);

  i18nToExcel(i18nData, i18nKey);
}

main();
