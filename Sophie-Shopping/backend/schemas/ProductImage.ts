import { list } from "@keystone-next/keystone/schema";
import { text } from "@keystone-next/fields";
import { cloudinaryImage } from "@keystone-next/cloudinary";
import "dotenv/config";

export const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: "sophie-shopping",
};

export const ProductImage = list({
  fields: {
    iamge: cloudinaryImage({
      cloudinary,
      label: "Source",
    }),
    altText: text(),
  },
});
