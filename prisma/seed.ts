import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create 2 dummy articles
  const article1 = await prisma.article.upsert({
    where: { title: 'ChatGPT Hype Captures Masses' },
    update: {},
    create: {
      title: 'ChatGPT Hype Captures Masses',
      body: 'ChatGPT is a new chatbot that uses GPT-3 to generate responses to user input. It is currently in beta and is free to use.',
      description: 'We are excited to share chatGPT with you',
      published: false,
    },
  });

  const article2 = await prisma.article.upsert({
    where: { title: 'Dawn of Artificial Intelligence' },
    update: {},
    create: {
      title: 'Dawn of Artificial Intelligence',
      body: 'Artificial Intelligence is the future of the world. It will change the way we live and work.',
      description: 'Humans need not apply',
      published: true,
    },
  });

  console.log({ article1, article2 });
}

// execute main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // Close prisma client
    await prisma.$disconnect();
  });
