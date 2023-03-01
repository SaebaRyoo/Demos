export const HTMLContent = ({ html }) => {
  console.log(html)
  return 'hello'
  if (html.length === 0) {
    return <div>Nothing to display</div>
  }
  return <div>{html}</div>
}
