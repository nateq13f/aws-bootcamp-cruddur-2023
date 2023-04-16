const {getClient, getOriginalImage, processImage, uploadProcessedImage} = require('./s3-image-processing.js')

async function main(){
  client = getClient()
  const srcBucket = 'assets.fireforeffect.live'
  const srcKey = 'avatars/original/Spok.jpg'
  const dstBucket = 'assets.fireforeffect.live'
  const dstKey = 'avatars/processed/Spok.jpg'
  const width = 256
  const height = 256

  const originalImage = await getOriginalImage(client,srcBucket,srcKey)
  console.log(originalImage)
  const processedImage = await processImage(originalImage,width,height)
  await uploadProcessedImage(client,dstBucket,dstKey,processedImage)
}

main()