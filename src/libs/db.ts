import { PrismaClient } from '../../.prisma/client/index.js'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>
} & typeof global

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export { prisma as default }
export * from '../../.prisma/client/index.js'

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
