import express from "express";
import * as dotenv from "dotenv";

import fetch from "node-fetch";
import sharp from "sharp";
import Replicate from "replicate";
dotenv.config();
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});
const router = express.Router();

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;
    console.log(req.body);

    const output = await replicate.run(
      "bytedance/sdxl-lightning-4step:727e49a643e999d602a896c774a0658ffefea21465756a6ce24b7ea4165eba6a",
      {
        input: {
          seed: 2992471961,
          width: 1024,
          height: 1024,
          prompt,
          scheduler: "K_EULER",
          num_outputs: 1,
          guidance_scale: 0,
          negative_prompt: "worst quality, low quality",
          num_inference_steps: 4,
        },
      }
    );
    console.log(output);
    const imageUrl = output[0];

    const response = await fetch(imageUrl);
    const buffer = await response.arrayBuffer();
    const image = await sharp(Buffer.from(buffer)).png().toBuffer();
    const base64Image = `data:image/png;base64,${image.toString("base64")}`;

    res.status(200).json({ photo: base64Image });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

export default router;
// import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// router.route("/").get((req, res) => {
//   res.status(200).json({ message: "hello from dalle routes" });
// });
// router.route("/").post(async (req, res) => {
//   try {
//     const { prompt } = req.body;
//     console.log(req.body);
//     const response = await openai.images.generate({
//       prompt,
//       model: "dall-e-2",
//       quality: "standard",
//       n: 1,
//       size: "1024x1024",
//       response_format: "b64_json",
//     });
//     const image = response.data[0].b64_json;

//     res.status(200).json({ photo: image });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: err.error.message });
//   }
// });
// export default router;
