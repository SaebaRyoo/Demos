import React from 'react'
import toJson from 'enzyme-to-json'

import MyEscapesPage from './MyEscapesPage'
import { fixture } from 'test/factories'
import { shallow, mount } from 'enzyme'
import { cleanup, screen } from '@testing-library/react'
import { render } from 'test/helpers/testingLibraryUtils'
import * as redux from 'react-redux'
import * as apiOrder from 'api/order'
import moment from 'moment'
import { setConfig } from 'constants/config'

const legacyDate = moment().utc().format()
jest.spyOn(redux, 'useDispatch').mockReturnValue(jest.fn())


jest.mock('api/order', () => ({
  fetchLegacyOrders: () => {
    return new Promise((resolve) => {
      resolve({
        _links: {
          self: {
            href: '/api/ee/orders{?page,per_page,order_by,order_direction,customer_id,vendor_id,utm_source,le_label,le_attribution,updated_since}',
            templated: true,
          },
        },
        message: null,
        status: 200,
        result: [
          // {
          //   _links: {
          //     self: {
          //       href: '/api/ee/orders/9097078e-d50f-4871-8898-d2dd444f3faa',
          //     },
          //     payments: {
          //       href: '/api/payments?id_orders=9097078e-d50f-4871-8898-d2dd444f3faa',
          //     },
          //   },
          //   id: '9097078e-d50f-4871-8898-d2dd444f3faa',
          //   number: '7638AE                   ',
          //   transaction_key: '69e5c710-d8d7-4315-bc43-3f722589fa95',
          //   currency_code: 'AUD',
          //   region_code: 'AU',
          //   status: 'completed',
          //   items: [],
          //   brand: 'scooponexperience',
          //   total: 50,
          //   app_type: 'web-app',
          //   is_gift: false,
          //   gift_to: '',
          //   gift_from: '',
          //   gift_message: '',
          //   customer_email: 'william.li@luxuryescapes.com',
          //   customer_given_name: 'Will',
          //   customer_surname: 'Li',
          //   customer_full_name: 'Will Li',
          //   customer_phone_prefix: null,
          //   customer_phone: null,
          //   created_at: '2022-02-17T03:21:15.106Z',
          //   updated_at: '2022-02-17T03:21:18.813Z',
          //   utm_source: '',
          //   utm_medium: '',
          //   utm_campaign: '',
          //   utm_content: '',
          //   utm_term: '',
          //   utm_ad: '',
          //   utm_adgroup: '',
          //   tracker_info: {
          //     payment_type: 'checkout',
          //   },
          // },
        ],
        count: 0,
        total: 0,
        legacyCutoffDate: legacyDate,
      })
    })
  },
}))

describe('<MyEscapesPage/>', () => {
  it('matches snapshot', () => {
    const purchases = [
      fixture.order({
        items: [
          fixture.orderItem(),
          fixture.orderItem(),
        ],
      }),
    ]

    const testModal = fixture.modal()

    const {baseElement} = render(
      <MyEscapesPage.WrappedComponent
        orders={purchases}
        modal={testModal}
        ordersFetched
        legacyOrdersCount={1}
        legacyDate={legacyDate}
      />,
    )
    expect(baseElement).toMatchSnapshot()
  })
})

describe('<MyEscapesPage/>', () => {


  beforeAll(() => {
    setConfig({ENABLE_LEGACY_ORDERS_CUTOFF_DATE: true})
  })
  it(`should render 'config.ENABLE_LEGACY_ORDERS_CUTOFF_DATE && !legacyOrdersCount' branch`, async () => {
    const purchases = [
      fixture.order({
        items: [
          fixture.orderItem(),
          fixture.orderItem(),
        ],
      }),
    ]

    const testModal = fixture.modal()
    const {count, legacyDate} = await apiOrder.fetchLegacyOrders('memberid')
    const legacyDateFormat = moment(legacyDate).format('MM/DD/YYYY')

    render(
      <MyEscapesPage.WrappedComponent
        orders={purchases}
        modal={testModal}
        ordersFetched
        legacyOrdersCount={count}
        legacyDate={legacyDateFormat}
      />
    )
    const testDOM = await screen.findByText(`View orders made before ${legacyDateFormat}`)
    expect(testDOM).toBeInTheDocument()
  })

  it(`<MyEscapesPage/> should render 'legacyError' branch`, async () => {
    jest.spyOn(apiOrder, 'fetchLegacyOrders').mockReturnValue({
      _links: {},
      message: "some error",
      status: 200,
      result: [],
      count: 0,
      total: 0,
      legacyCutoffDate: '',
    })
    const purchases = [
      fixture.order({
        items: [
          fixture.orderItem(),
          fixture.orderItem(),
        ],
      }),
    ]
    const testModal = fixture.modal()
    const {count, legacyDate, message} = await apiOrder.fetchLegacyOrders('memberid1')
    const legacyDateFormat = moment(legacyDate).format('MM/DD/YYYY')
    render(
      <MyEscapesPage.WrappedComponent
        orders={purchases}
        modal={testModal}
        ordersFetched
        legacyOrdersCount={count}
        legacyDate={legacyDateFormat}
        legacyError={message}
      />
    )
    expect(screen.getByTestId('legacy-warning-badge')).toBeInTheDocument()
  })

  it('should render page of 404', async () => {
    const mockFetchError = {
      status: 404,
    }
    const purchases = [
      fixture.order({
        items: [
          fixture.orderItem(),
          fixture.orderItem(),
        ],
      }),
    ]
    const testModal = fixture.modal()
    const {count, legacyDate, message} = await apiOrder.fetchLegacyOrders('memberid2')
    const legacyDateFormat = moment(legacyDate).format('MM/DD/YYYY')
    render(
      <MyEscapesPage.WrappedComponent
        orders={purchases}
        modal={testModal}
        ordersFetched
        legacyOrdersCount={count}
        legacyDate={legacyDateFormat}
        legacyError={message}
        fetchError={mockFetchError}
      />
    )
    expect(screen.getByText('404')).toBeInTheDocument()
    expect(screen.getByText('Page not found')).toBeInTheDocument()
  })


  it('should render error page', async () => {
    const mockFetchError = {
      status: 500,
      message: "oops, we're resolving some problems"
    }
    const purchases = [
      fixture.order({
        items: [
          fixture.orderItem(),
          fixture.orderItem(),
        ],
      }),
    ]
    const testModal = fixture.modal()
    const {count, legacyDate, message} = await apiOrder.fetchLegacyOrders('memberid2')
    const legacyDateFormat = moment(legacyDate).format('MM/DD/YYYY')
    render(
      <MyEscapesPage.WrappedComponent
        orders={purchases}
        modal={testModal}
        ordersFetched
        legacyOrdersCount={count}
        legacyDate={legacyDateFormat}
        legacyError={message}
        fetchError={mockFetchError}
      />
    )
    expect(screen.getByText(mockFetchError.status)).toBeInTheDocument()
    expect(screen.getByText(mockFetchError.message)).toBeInTheDocument()
  })

})
