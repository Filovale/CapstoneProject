import { Schema, model } from "mongoose"
/*
{
  "_id": 1,
  "category": "Getting Started",
  "title": "Mavic 3E",
  "cover": "https://www1.djicdn.com/cms/uploads/2f3b03cc41a29708eea071f487f4c576@374*374.png",
  "author" : "https://www.dji.com/it",
  "info" : "https://enterprise.dji.com/it/mavic-3-enterprise/specs" ,
  "software": {
        "name": ["Litchi" , "UgCS" , "Dronelink"] ,
        "link": ["https://flylitchi.com/" , "https://www.sphengineering.com/flight-planning/ugcs-downloads" , "https://www.dronelink.com/download"]
  }
},
*/
const dronesSchema = new Schema(
  {
    category: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    cover: {
      type: String,
      required: true,
    },
    vendor: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      required: true,
    },
    software: [
      {
        name: {
          type: String
        },
        link: {
          type: String
        }
      }
    ]
  },
  { collection: "drones" }
)

export default model("Drones", dronesSchema)
