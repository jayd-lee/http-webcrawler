const { crawlPage } = require("./crawl")
const { printReport } = require("./report")

async function main() {
  if (process.argv.length < 3) {
    console.log("no valid website provided")
    process.exit(1)
  }
  if (process.argv.length < 3) {
    console.log("too many command line args. Only 1 website allowed")
    process.exit(1)
  }
  const baseURL = process.argv[2]
  console.log(`starting crawl ${baseURL}`)
  const pages = await crawlPage(baseURL, baseURL, {})
  printReport(pages)
}

main()