const { gql } = require('@apollo/client/core')
const { hogwarts } = require('../Tools/Client/graphql.js')

async function calendars() {
  const { data } = await hogwarts.query({
    query: CALENDARS,
  })
  return data
}

const CALENDARS = gql`
    query {
      calendars : calendar {
        id
        pathway {
          id
          contraints_prerequis_modules {
            id
            module {
              id
              module_constraint {
                id
              }
            }
          }
        }
        student {
          id
        }
      }
    }
`

async function calendarById(id) {
  const { data } = await hogwarts.query({
    query: CALENDAR_BY_ID,
    variables: {id: id}
  })
  return data
}

const CALENDAR_BY_ID = gql`
    query($id: uuid!) {
      calendar : calendar_by_pk(id: $id) {
        id
        pathway {
          id
          contraints_prerequis_modules(order_by: {order: asc}) {
            id
            module {
              id
            }
          }
        }
        student {
          id
        }
      }
    }
`

module.exports = {
  calendars,
  calendarById
}
