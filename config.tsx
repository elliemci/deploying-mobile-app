const AppConfig =

{
    title : "Food Image Classifier"
    ,description: `

This app predicts a food category of an image.

The fine tuned MobilNet V2 model was trained using the [Food-101 dataset](https://www.vision.ee.ethz.ch/datasets_extra/food-101/) and TensorFlow 2.4.0.

Notes:
- Time to inference will vary by user as it is dependent on the hardware.
    `
    ,imageSize :224
    ,topK:3
    ,precision:2

};


export {AppConfig}
