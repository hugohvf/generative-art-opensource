const fs = require("fs");
const width = 1000;
const height = 1000;
const dir = __dirname;
const description = "Satoshi Runners collection";
const baseImageUri = "https://hashlips/nft";
const startEditionFrom = 1;
const endEditionAt = 10;
const editionSize = 10;
const raceWeights = [
  {
    value: "skull",
    from: 1,
    to: editionSize,
  },
];

const getAllLayersInDirectory = () => {
  // path: `${dir}/1-background/LightBlue.png`,
  var fs = require("fs");
  var finalLayers = [];

  var folder = fs.readdirSync("input/1-background/");

  var backgrounds = fs.readdirSync("input/1-background/");
  var body = fs.readdirSync("input/2-body/");
  var shirts = fs.readdirSync("input/3-shirts/");
  var pants = fs.readdirSync("input/4-pants/");
  var belts = fs.readdirSync("input/5-belts/");
  var handAccessories = fs.readdirSync("input/6-hand accessories/");
  var mouthAccessories = fs.readdirSync("input/7-mouth accessories/");
  var eyesAccessories = fs.readdirSync("input/8-eyes accessories/");
  var helmets = fs.readdirSync("input/9-helmets/");
  var jacketsAndHoodies = fs.readdirSync("input/10-jackets and hoodies/");

  const getFolderName = (id) => {
    var folderNames = [
      'background',
      'body',
      'shirts',
      'pants',
      'belts',
      'hand accessories',
      'mouth accessories',
      'eyes accessories',
      'helmets',
      'jackets and hoodies',
    ];
    
    return folderNames[id];
  };

  var layers = [
    backgrounds,
    body,
    shirts,
    pants,
    belts,
    handAccessories,
    mouthAccessories,
    eyesAccessories,
    helmets,
    jacketsAndHoodies,
  ];

  finalLayers = 
    layers.map((layerFiles, index) => {
      var newIndex = index + 1;

      layerFiles.forEach((file, index) => {
        elements.push({
          id: index,
          name: String(file),
          path: `${dir}/${newIndex}-${getFolderName(index + 1)}/${String(file)}`,
          weight: 100,
        })
      });
    });

  return finalLayers;
};

const testHugo = () => {
  const fs = require("fs")
  const inputPath = "./input"
  const files = fs.readdirSync(inputPath)
  const dir = __dirname;

  const layers = []

  files.forEach(file => {
    let numberPosition = 0
    if (Number.isInteger(+file[0])) {
      while (Number.isInteger(+file[numberPosition + 1]))
        numberPosition++

      const initialStringPosition = numberPosition + 2
      const inputs = fs.readdirSync(`${inputPath}/${file}`)
      const elementName = file.substring(initialStringPosition, initialStringPosition + 1).toUpperCase() + file.substring(initialStringPosition + 1)
      const layer = {
        name: elementName,
        elements: [],
        position: {
          x: 0,
          y: 0
        },
        size: {
          width: "width",
          height: "height"
        },
      }
      inputs.forEach((input, index) => {
        layer.elements.push({
          id: index,
          name: "Light blue",
          path: `${dir}/${file}/${elementName}.gif`,
          weight: 100,
        })
      })

      layers.push(layer)
    }
  })

  fs.writeFile('./layer.json', JSON.stringify(layers), err => {
    if (err) {
      console.error(err)
      return
    }
  })
};

testHugo();

// getAllLayersInDirectory();

const races = {
  skull: {
    name: "Skull",
    layers: [
      {
        name: "Background",
        elements: [
          {
            id: 0,
            name: "Atlantic",
            path: `${dir}/1-background/Atlantic.gif`,
            weight: 100,
          },
          {
            id: 0,
            name: "Badlands",
            path: `${dir}/1-background/Badlands.gif`,
            weight: 100,
          },
          {
            id: 0,
            name: "Bastion",
            path: `${dir}/1-background/Bastion.gif`,
            weight: 100,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Suit",
        elements: [
          {
            id: 0,
            name: "Regular",
            path: `${dir}/2-suit/Regular.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Orange",
            path: `${dir}/2-suit/Orange.png`,
            weight: 20,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Shoulder",
        elements: [
          {
            id: 0,
            name: "LunaFlag",
            path: `${dir}/3-shoulder/LunaFlag.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "USA",
            path: `${dir}/3-shoulder/USA.png`,
            weight: 90,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Pin",
        elements: [
          {
            id: 0,
            name: "Smiley",
            path: `${dir}/4-pin/Smiley.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "LunaBluePin",
            path: `${dir}/4-pin/LunaBluePin.png`,
            weight: 90,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Race",
        elements: [
          {
            id: 0,
            name: "Skull",
            path: `${dir}/5-skin/Skull.png`,
            weight: 100,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Facial hair",
        elements: [
          {
            id: 0,
            name: "No facial hair",
            path: `${dir}/6-facial-hair/NoFacialHair.png`,
            weight: 100,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Mask",
        elements: [
          {
            id: 0,
            name: "No mask",
            path: `${dir}/7-mask/NoMask.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Medical",
            path: `${dir}/7-mask/mask.png`,
            weight: 5,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Hair",
        elements: [
          {
            id: 0,
            name: "Blonde bun",
            path: `${dir}/8-hair/BlondeBun.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Pink",
            path: `${dir}/8-hair/Pink.png`,
            weight: 91,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Accessories",
        elements: [
          {
            id: 0,
            name: "No accessories",
            path: `${dir}/9-accessories/NoAcc.png`,
            weight: 100,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Headwear",
        elements: [
          {
            id: 0,
            name: "Glass dome",
            path: `${dir}/10-headwear/GlassDome.png`,
            weight: 100,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
    ],
  },
};

module.exports = {
  width,
  height,
  description,
  baseImageUri,
  editionSize,
  startEditionFrom,
  endEditionAt,
  races,
  raceWeights,
};
