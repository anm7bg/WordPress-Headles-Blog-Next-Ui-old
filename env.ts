export const apiUrl = assertValue(
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
  'Missing environment variable: API_URL'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}