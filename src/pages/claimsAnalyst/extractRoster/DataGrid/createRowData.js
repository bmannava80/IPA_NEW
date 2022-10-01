import faker from "faker";

function createFakeRow(index) {
  return {
    expanded: -1,
    id: index,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    jobTitle: faker.name.jobTitle(),
    jobArea: faker.name.jobArea(),
    jobType: faker.name.jobType(),
    email: faker.internet.email(),
    street: faker.address.streetName(),
    zipCode: faker.address.zipCode(),
    date: faker.date.past().toLocaleDateString(),
    catchPhrase: faker.company.catchPhrase(),
  };
}

export default function createRowData(count) {
  return [...Array(count).keys()].map(i => createFakeRow(i));
}
    