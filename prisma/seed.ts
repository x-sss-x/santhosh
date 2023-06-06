import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  await prisma.request.deleteMany();
  await prisma.review.deleteMany();
  await prisma.history.deleteMany();
  await prisma.service.deleteMany();
  await prisma.serviceprovider.deleteMany();
  await prisma.customer.deleteMany();

  for (let i = 0; i < 10; i++) {
    const customer = await prisma.customer.create({
      data: {
        customer_name: faker.name.firstName(),
        customer_email: faker.internet.email(),
        phone_number: BigInt(faker.phone.number('+91#########')),
        address: faker.address.streetAddress(),
        password: faker.internet.password(),
        profile_picture: faker.image.image() ,
        age: faker.datatype.number({ min: 18, max: 80 }),
      },
    });

    const serviceProvider = await prisma.serviceprovider.create({
      data: {
        serviceprovider_name: faker.company.companyName(),
        serviceprovider_email: faker.internet.email(),
        phone_number:BigInt(faker.phone.number('91#########')),
        gstregistration_number: faker.random.alphaNumeric(8),
        chargers_for_particular_service: faker.datatype.number({ min: 50, max: 500 }),
        specialisation: faker.lorem.word(),
        service_name: faker.lorem.word(),
        age: faker.datatype.number({ min: 18, max: 80 }),
        profile_picture: faker.image.image(),
        address: faker.address.streetAddress(),
        password: faker.internet.password(),
      },
    });

    const service = await prisma.service.create({
      data: {
        service_name: faker.lorem.word(),
        serviceprovider_id: serviceProvider.serviceprovider_id,
      },
    });

    const history = await prisma.history.create({
      data: {
        date: faker.date.recent(),
        customer_id: customer.customer_id,
        serviceprovider_id: serviceProvider.serviceprovider_id,
        service_id: service.service_id,
      },
    });

    const review = await prisma.review.create({
      data: {
        customer_id: customer.customer_id,
        service_id: service.service_id,
        rating: faker.datatype.float({ min: 1, max: 5, precision: 0.1 }),
        review_content: faker.lorem.sentences(),
        serviceprovider_id: serviceProvider.serviceprovider_id
      },
    });

    

    const request = await prisma.request.create({
      data: {
        reasons_for_rejecting: faker.lorem.sentence(),
        date: faker.date.future(),
        serviceprovider_id: serviceProvider.serviceprovider_id,
        customer_id: customer.customer_id,
        service_id: service.service_id,
        status:'cancelled'
      },
    });
  }

  console.log('Data seeded successfully!');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
