import request, { gql } from "graphql-request";

export default async function getCarsList() {
  const query = gql`
  query CarLists {
    carLists {
      carAvg
      createdAt
      id
      name
      price
      seat
      updatedAt
      image {
        url
      }
      carType
      carBrand
    }
  }
`

const result = await request(`https://api-ap-northeast-1.hygraph.com/v2/clno8e8ii4wwn01uj1b7i331n/master`,query)
return result;

}