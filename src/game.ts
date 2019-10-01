const scene = new Entity()
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
scene.addComponentOrReplace(transform)
engine.addEntity(scene)

const tree_Leafs_01 = new Entity()
tree_Leafs_01.setParent(scene)
const gltfShape = new GLTFShape('models/Tree_Leafs_01/Tree_Leafs_01.glb')
tree_Leafs_01.addComponentOrReplace(gltfShape)
const transform_2 = new Transform({
  position: new Vector3(5.5, 0, 60.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Leafs_01.addComponentOrReplace(transform_2)
engine.addEntity(tree_Leafs_01)

const tree_Leafs_01_2 = new Entity()
tree_Leafs_01_2.setParent(scene)
tree_Leafs_01_2.addComponentOrReplace(gltfShape)
const transform_3 = new Transform({
  position: new Vector3(14.5, 0, 60.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Leafs_01_2.addComponentOrReplace(transform_3)
engine.addEntity(tree_Leafs_01_2)

const tree_Leafs_01_3 = new Entity()
tree_Leafs_01_3.setParent(scene)
tree_Leafs_01_3.addComponentOrReplace(gltfShape)
const transform_4 = new Transform({
  position: new Vector3(5, 0, 52),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Leafs_01_3.addComponentOrReplace(transform_4)
engine.addEntity(tree_Leafs_01_3)

const tree_Forest_Pink_03 = new Entity()
tree_Forest_Pink_03.setParent(scene)
const gltfShape_2 = new GLTFShape('models/Tree_Forest_Pink_03/Tree_Forest_Pink_03.glb')
tree_Forest_Pink_03.addComponentOrReplace(gltfShape_2)
const transform_5 = new Transform({
  position: new Vector3(6, 0, 43),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Pink_03.addComponentOrReplace(transform_5)
engine.addEntity(tree_Forest_Pink_03)

const palmTree_02 = new Entity()
palmTree_02.setParent(scene)
const gltfShape_3 = new GLTFShape('models/PalmTree_02/PalmTree_02.glb')
palmTree_02.addComponentOrReplace(gltfShape_3)
const transform_6 = new Transform({
  position: new Vector3(5, 0, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
palmTree_02.addComponentOrReplace(transform_6)
engine.addEntity(palmTree_02)

const palmTree_02_2 = new Entity()
palmTree_02_2.setParent(scene)
palmTree_02_2.addComponentOrReplace(gltfShape_3)
const transform_7 = new Transform({
  position: new Vector3(5, 0, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
palmTree_02_2.addComponentOrReplace(transform_7)
engine.addEntity(palmTree_02_2)

const tree_Dead_02 = new Entity()
tree_Dead_02.setParent(scene)
const gltfShape_4 = new GLTFShape('models/Tree_Dead_02/Tree_Dead_02.glb')
tree_Dead_02.addComponentOrReplace(gltfShape_4)
const transform_8 = new Transform({
  position: new Vector3(44.5, 0, 22.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Dead_02.addComponentOrReplace(transform_8)
engine.addEntity(tree_Dead_02)

const tree_03 = new Entity()
tree_03.setParent(scene)
const gltfShape_5 = new GLTFShape('models/Tree_03/Tree_03.glb')
tree_03.addComponentOrReplace(gltfShape_5)
const transform_9 = new Transform({
  position: new Vector3(4, 0, 2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_03.addComponentOrReplace(transform_9)
engine.addEntity(tree_03)

const tree_Forest_Turquoise_03 = new Entity()
tree_Forest_Turquoise_03.setParent(scene)
const gltfShape_6 = new GLTFShape('models/Tree_Forest_Turquoise_03/Tree_Forest_Turquoise_03.glb')
tree_Forest_Turquoise_03.addComponentOrReplace(gltfShape_6)
const transform_10 = new Transform({
  position: new Vector3(6.5, 0, 29.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Turquoise_03.addComponentOrReplace(transform_10)
engine.addEntity(tree_Forest_Turquoise_03)

const tree_Forest_Turquoise_03_2 = new Entity()
tree_Forest_Turquoise_03_2.setParent(scene)
tree_Forest_Turquoise_03_2.addComponentOrReplace(gltfShape_6)
const transform_11 = new Transform({
  position: new Vector3(6.5, 0, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Turquoise_03_2.addComponentOrReplace(transform_11)
engine.addEntity(tree_Forest_Turquoise_03_2)

const tree_Forest_Turquoise_03_3 = new Entity()
tree_Forest_Turquoise_03_3.setParent(scene)
tree_Forest_Turquoise_03_3.addComponentOrReplace(gltfShape_6)
const transform_12 = new Transform({
  position: new Vector3(6.5, 0, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Turquoise_03_3.addComponentOrReplace(transform_12)
engine.addEntity(tree_Forest_Turquoise_03_3)

const tree_Forest_Turquoise_03_4 = new Entity()
tree_Forest_Turquoise_03_4.setParent(scene)
tree_Forest_Turquoise_03_4.addComponentOrReplace(gltfShape_6)
const transform_13 = new Transform({
  position: new Vector3(7, 0, 21),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Turquoise_03_4.addComponentOrReplace(transform_13)
engine.addEntity(tree_Forest_Turquoise_03_4)

const tree_Forest_Turquoise_03_5 = new Entity()
tree_Forest_Turquoise_03_5.setParent(scene)
tree_Forest_Turquoise_03_5.addComponentOrReplace(gltfShape_6)
const transform_14 = new Transform({
  position: new Vector3(6.5, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Turquoise_03_5.addComponentOrReplace(transform_14)
engine.addEntity(tree_Forest_Turquoise_03_5)

const tree_01 = new Entity()
tree_01.setParent(scene)
const gltfShape_7 = new GLTFShape('models/Tree_01/Tree_01.glb')
tree_01.addComponentOrReplace(gltfShape_7)
const transform_15 = new Transform({
  position: new Vector3(6, 0, 26),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_01.addComponentOrReplace(transform_15)
engine.addEntity(tree_01)

const tree_Forest_Pink_02 = new Entity()
tree_Forest_Pink_02.setParent(scene)
const gltfShape_8 = new GLTFShape('models/Tree_Forest_Pink_02/Tree_Forest_Pink_02.glb')
tree_Forest_Pink_02.addComponentOrReplace(gltfShape_8)
const transform_16 = new Transform({
  position: new Vector3(5, 0, 59.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Pink_02.addComponentOrReplace(transform_16)
engine.addEntity(tree_Forest_Pink_02)

const tree_Forest_Green_02 = new Entity()
tree_Forest_Green_02.setParent(scene)
const gltfShape_9 = new GLTFShape('models/Tree_Forest_Green_02/Tree_Forest_Green_02.glb')
tree_Forest_Green_02.addComponentOrReplace(gltfShape_9)
const transform_17 = new Transform({
  position: new Vector3(9, 0, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Green_02.addComponentOrReplace(transform_17)
engine.addEntity(tree_Forest_Green_02)

const tree_Forest_Turquoise_01 = new Entity()
tree_Forest_Turquoise_01.setParent(scene)
const gltfShape_10 = new GLTFShape('models/Tree_Forest_Turquoise_01/Tree_Forest_Turquoise_01.glb')
tree_Forest_Turquoise_01.addComponentOrReplace(gltfShape_10)
const transform_18 = new Transform({
  position: new Vector3(10, 0, 4.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Turquoise_01.addComponentOrReplace(transform_18)
engine.addEntity(tree_Forest_Turquoise_01)

const tree_Forest_Turquoise_03_6 = new Entity()
tree_Forest_Turquoise_03_6.setParent(scene)
tree_Forest_Turquoise_03_6.addComponentOrReplace(gltfShape_6)
const transform_19 = new Transform({
  position: new Vector3(16, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Turquoise_03_6.addComponentOrReplace(transform_19)
engine.addEntity(tree_Forest_Turquoise_03_6)

const treeTall_03 = new Entity()
treeTall_03.setParent(scene)
const gltfShape_11 = new GLTFShape('models/TreeTall_03/TreeTall_03.glb')
treeTall_03.addComponentOrReplace(gltfShape_11)
const transform_20 = new Transform({
  position: new Vector3(14, 0, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treeTall_03.addComponentOrReplace(transform_20)
engine.addEntity(treeTall_03)

const tree_03_2 = new Entity()
tree_03_2.setParent(scene)
tree_03_2.addComponentOrReplace(gltfShape_5)
const transform_21 = new Transform({
  position: new Vector3(20.5, 0, 2.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_03_2.addComponentOrReplace(transform_21)
engine.addEntity(tree_03_2)

const tree_03_3 = new Entity()
tree_03_3.setParent(scene)
tree_03_3.addComponentOrReplace(gltfShape_5)
const transform_22 = new Transform({
  position: new Vector3(13.5, 0, 2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_03_3.addComponentOrReplace(transform_22)
engine.addEntity(tree_03_3)

const plantSF_11 = new Entity()
plantSF_11.setParent(scene)
const gltfShape_12 = new GLTFShape('models/PlantSF_11/PlantSF_11.glb')
plantSF_11.addComponentOrReplace(gltfShape_12)
const transform_23 = new Transform({
  position: new Vector3(24.5, 0, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plantSF_11.addComponentOrReplace(transform_23)
engine.addEntity(plantSF_11)

const tree_Forest_Turquoise_02 = new Entity()
tree_Forest_Turquoise_02.setParent(scene)
const gltfShape_13 = new GLTFShape('models/Tree_Forest_Turquoise_02/Tree_Forest_Turquoise_02.glb')
tree_Forest_Turquoise_02.addComponentOrReplace(gltfShape_13)
const transform_24 = new Transform({
  position: new Vector3(26.5, 0, 3.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Turquoise_02.addComponentOrReplace(transform_24)
engine.addEntity(tree_Forest_Turquoise_02)

const treeHouse_01 = new Entity()
treeHouse_01.setParent(scene)
const gltfShape_14 = new GLTFShape('models/TreeHouse_01/TreeHouse_01.glb')
treeHouse_01.addComponentOrReplace(gltfShape_14)
const transform_25 = new Transform({
  position: new Vector3(17, 0, 51.5),
  rotation: new Quaternion(0, -0.9569403357322094, 0, 0.2902846772544626),
  scale: new Vector3(1.8660254037844386, 1.8660254037844386, 1.8660254037844386)
})
treeHouse_01.addComponentOrReplace(transform_25)
engine.addEntity(treeHouse_01)

const statue_02 = new Entity()
statue_02.setParent(scene)
const gltfShape_15 = new GLTFShape('models/Statue_02/Statue_02.glb')
statue_02.addComponentOrReplace(gltfShape_15)
const transform_26 = new Transform({
  position: new Vector3(59.5, 0, 33),
  rotation: new Quaternion(0, 0.7071067811865477, 0, 0.7071067811865476),
  scale: new Vector3(3.598076211353317, 3.598076211353317, 3.598076211353317)
})
statue_02.addComponentOrReplace(transform_26)
engine.addEntity(statue_02)

const chineseStatueDragon_01 = new Entity()
chineseStatueDragon_01.setParent(scene)
const gltfShape_16 = new GLTFShape('models/ChineseStatueDragon_01/ChineseStatueDragon_01.glb')
chineseStatueDragon_01.addComponentOrReplace(gltfShape_16)
const transform_27 = new Transform({
  position: new Vector3(66, 0, 27),
  rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475),
  scale: new Vector3(1, 1, 1)
})
chineseStatueDragon_01.addComponentOrReplace(transform_27)
engine.addEntity(chineseStatueDragon_01)

const chineseStatueDragon_01_2 = new Entity()
chineseStatueDragon_01_2.setParent(scene)
chineseStatueDragon_01_2.addComponentOrReplace(gltfShape_16)
const transform_28 = new Transform({
  position: new Vector3(66, 0, 39),
  rotation: new Quaternion(0, 0.7071067811865476, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
chineseStatueDragon_01_2.addComponentOrReplace(transform_28)
engine.addEntity(chineseStatueDragon_01_2)

const floorHexa_01 = new Entity()
floorHexa_01.setParent(scene)
const gltfShape_17 = new GLTFShape('models/FloorHexa_01/FloorHexa_01.glb')
floorHexa_01.addComponentOrReplace(gltfShape_17)
const transform_29 = new Transform({
  position: new Vector3(62.5, 0, 31.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01.addComponentOrReplace(transform_29)
engine.addEntity(floorHexa_01)

const floorHexa_01_2 = new Entity()
floorHexa_01_2.setParent(scene)
floorHexa_01_2.addComponentOrReplace(gltfShape_17)
const transform_30 = new Transform({
  position: new Vector3(61.5, 0, 33),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_2.addComponentOrReplace(transform_30)
engine.addEntity(floorHexa_01_2)

const floorHexa_01_3 = new Entity()
floorHexa_01_3.setParent(scene)
floorHexa_01_3.addComponentOrReplace(gltfShape_17)
const transform_31 = new Transform({
  position: new Vector3(63.5, 0, 33),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_3.addComponentOrReplace(transform_31)
engine.addEntity(floorHexa_01_3)

const floorHexa_01_4 = new Entity()
floorHexa_01_4.setParent(scene)
floorHexa_01_4.addComponentOrReplace(gltfShape_17)
const transform_32 = new Transform({
  position: new Vector3(62.5, 0, 34.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_4.addComponentOrReplace(transform_32)
engine.addEntity(floorHexa_01_4)

const floorHexa_01_5 = new Entity()
floorHexa_01_5.setParent(scene)
floorHexa_01_5.addComponentOrReplace(gltfShape_17)
const transform_33 = new Transform({
  position: new Vector3(63.5, 0, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_5.addComponentOrReplace(transform_33)
engine.addEntity(floorHexa_01_5)

const floorHexa_01_6 = new Entity()
floorHexa_01_6.setParent(scene)
floorHexa_01_6.addComponentOrReplace(gltfShape_17)
const transform_34 = new Transform({
  position: new Vector3(64.5, 0, 31.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_6.addComponentOrReplace(transform_34)
engine.addEntity(floorHexa_01_6)

const floorHexa_01_7 = new Entity()
floorHexa_01_7.setParent(scene)
floorHexa_01_7.addComponentOrReplace(gltfShape_17)
const transform_35 = new Transform({
  position: new Vector3(61.5, 0, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_7.addComponentOrReplace(transform_35)
engine.addEntity(floorHexa_01_7)

const floorHexa_01_8 = new Entity()
floorHexa_01_8.setParent(scene)
floorHexa_01_8.addComponentOrReplace(gltfShape_17)
const transform_36 = new Transform({
  position: new Vector3(62.5, 0, 28.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_8.addComponentOrReplace(transform_36)
engine.addEntity(floorHexa_01_8)

const floorHexa_01_9 = new Entity()
floorHexa_01_9.setParent(scene)
floorHexa_01_9.addComponentOrReplace(gltfShape_17)
const transform_37 = new Transform({
  position: new Vector3(63.5, 0, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_9.addComponentOrReplace(transform_37)
engine.addEntity(floorHexa_01_9)

const floorHexa_01_10 = new Entity()
floorHexa_01_10.setParent(scene)
floorHexa_01_10.addComponentOrReplace(gltfShape_17)
const transform_38 = new Transform({
  position: new Vector3(65.5, 0, 33),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_10.addComponentOrReplace(transform_38)
engine.addEntity(floorHexa_01_10)

const floorHexa_01_11 = new Entity()
floorHexa_01_11.setParent(scene)
floorHexa_01_11.addComponentOrReplace(gltfShape_17)
const transform_39 = new Transform({
  position: new Vector3(66.5, 0, 37.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_11.addComponentOrReplace(transform_39)
engine.addEntity(floorHexa_01_11)

const floorHexa_01_12 = new Entity()
floorHexa_01_12.setParent(scene)
floorHexa_01_12.addComponentOrReplace(gltfShape_17)
const transform_40 = new Transform({
  position: new Vector3(64.5, 0, 28.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_12.addComponentOrReplace(transform_40)
engine.addEntity(floorHexa_01_12)

const floorHexa_01_13 = new Entity()
floorHexa_01_13.setParent(scene)
floorHexa_01_13.addComponentOrReplace(gltfShape_17)
const transform_41 = new Transform({
  position: new Vector3(65.5, 0, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_13.addComponentOrReplace(transform_41)
engine.addEntity(floorHexa_01_13)

const floorHexa_01_14 = new Entity()
floorHexa_01_14.setParent(scene)
floorHexa_01_14.addComponentOrReplace(gltfShape_17)
const transform_42 = new Transform({
  position: new Vector3(66.5, 0, 31.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_14.addComponentOrReplace(transform_42)
engine.addEntity(floorHexa_01_14)

const floorHexa_01_15 = new Entity()
floorHexa_01_15.setParent(scene)
floorHexa_01_15.addComponentOrReplace(gltfShape_17)
const transform_43 = new Transform({
  position: new Vector3(66.5, 0, 34.5),
  rotation: new Quaternion(0, 0, -4.163336342344337e-17, 1.0000000000000002),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_15.addComponentOrReplace(transform_43)
engine.addEntity(floorHexa_01_15)

const floorHexa_01_16 = new Entity()
floorHexa_01_16.setParent(scene)
floorHexa_01_16.addComponentOrReplace(gltfShape_17)
const transform_44 = new Transform({
  position: new Vector3(60.5, 0, 31.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_16.addComponentOrReplace(transform_44)
engine.addEntity(floorHexa_01_16)

const floorHexa_01_17 = new Entity()
floorHexa_01_17.setParent(scene)
floorHexa_01_17.addComponentOrReplace(gltfShape_17)
const transform_45 = new Transform({
  position: new Vector3(66.5, 0, 28.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_17.addComponentOrReplace(transform_45)
engine.addEntity(floorHexa_01_17)

const floorHexa_01_18 = new Entity()
floorHexa_01_18.setParent(scene)
floorHexa_01_18.addComponentOrReplace(gltfShape_17)
const transform_46 = new Transform({
  position: new Vector3(46, 0, 25.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_18.addComponentOrReplace(transform_46)
engine.addEntity(floorHexa_01_18)

const lightCylinder_02 = new Entity()
lightCylinder_02.setParent(scene)
const gltfShape_18 = new GLTFShape('models/LightCylinder_02/LightCylinder_02.glb')
lightCylinder_02.addComponentOrReplace(gltfShape_18)
const transform_47 = new Transform({
  position: new Vector3(126.5, 0, 19),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.175426480542943, 4.175426480542943, 4.175426480542943)
})
lightCylinder_02.addComponentOrReplace(transform_47)
engine.addEntity(lightCylinder_02)

const lightCylinder_02_2 = new Entity()
lightCylinder_02_2.setParent(scene)
lightCylinder_02_2.addComponentOrReplace(gltfShape_18)
const transform_48 = new Transform({
  position: new Vector3(126.5, 0, 42.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.675426480542942, 4.175426480542942, 4.175426480542942)
})
lightCylinder_02_2.addComponentOrReplace(transform_48)
engine.addEntity(lightCylinder_02_2)

const light_02 = new Entity()
light_02.setParent(scene)
const gltfShape_19 = new GLTFShape('models/Light_02/Light_02.glb')
light_02.addComponentOrReplace(gltfShape_19)
const transform_49 = new Transform({
  position: new Vector3(127.5, 0, 3.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.598076211353317, 3.5980762113533156, 3.598076211353317)
})
light_02.addComponentOrReplace(transform_49)
engine.addEntity(light_02)

const light_02_2 = new Entity()
light_02_2.setParent(scene)
light_02_2.addComponentOrReplace(gltfShape_19)
const transform_50 = new Transform({
  position: new Vector3(127.5, 0, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.598076211353317, 3.5980762113533156, 3.598076211353317)
})
light_02_2.addComponentOrReplace(transform_50)
engine.addEntity(light_02_2)

const light_02_3 = new Entity()
light_02_3.setParent(scene)
light_02_3.addComponentOrReplace(gltfShape_19)
const transform_51 = new Transform({
  position: new Vector3(127.5, 0, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.598076211353317, 3.5980762113533156, 3.598076211353317)
})
light_02_3.addComponentOrReplace(transform_51)
engine.addEntity(light_02_3)

const light_02_4 = new Entity()
light_02_4.setParent(scene)
light_02_4.addComponentOrReplace(gltfShape_19)
const transform_52 = new Transform({
  position: new Vector3(127.5, 0, 13.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.598076211353317, 3.5980762113533156, 3.598076211353317)
})
light_02_4.addComponentOrReplace(transform_52)
engine.addEntity(light_02_4)

const light_02_5 = new Entity()
light_02_5.setParent(scene)
light_02_5.addComponentOrReplace(gltfShape_19)
const transform_53 = new Transform({
  position: new Vector3(127.5, 0, 44.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.598076211353317, 3.5980762113533156, 3.598076211353317)
})
light_02_5.addComponentOrReplace(transform_53)
engine.addEntity(light_02_5)

const light_02_6 = new Entity()
light_02_6.setParent(scene)
light_02_6.addComponentOrReplace(gltfShape_19)
const transform_54 = new Transform({
  position: new Vector3(127.5, 0, 48),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.598076211353317, 3.5980762113533156, 3.598076211353317)
})
light_02_6.addComponentOrReplace(transform_54)
engine.addEntity(light_02_6)

const light_02_7 = new Entity()
light_02_7.setParent(scene)
light_02_7.addComponentOrReplace(gltfShape_19)
const transform_55 = new Transform({
  position: new Vector3(127.5, 0, 51.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.598076211353317, 3.5980762113533156, 3.598076211353317)
})
light_02_7.addComponentOrReplace(transform_55)
engine.addEntity(light_02_7)

const light_02_8 = new Entity()
light_02_8.setParent(scene)
light_02_8.addComponentOrReplace(gltfShape_19)
const transform_56 = new Transform({
  position: new Vector3(127.5, 0, 54.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.598076211353317, 3.5980762113533156, 3.598076211353317)
})
light_02_8.addComponentOrReplace(transform_56)
engine.addEntity(light_02_8)

const light_02_9 = new Entity()
light_02_9.setParent(scene)
light_02_9.addComponentOrReplace(gltfShape_19)
const transform_57 = new Transform({
  position: new Vector3(127.5, 0, 60.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.598076211353317, 3.5980762113533156, 3.598076211353317)
})
light_02_9.addComponentOrReplace(transform_57)
engine.addEntity(light_02_9)

const light_02_10 = new Entity()
light_02_10.setParent(scene)
light_02_10.addComponentOrReplace(gltfShape_19)
const transform_58 = new Transform({
  position: new Vector3(127.5, 0, 57.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.598076211353317, 3.5980762113533156, 3.598076211353317)
})
light_02_10.addComponentOrReplace(transform_58)
engine.addEntity(light_02_10)

const light_02_11 = new Entity()
light_02_11.setParent(scene)
light_02_11.addComponentOrReplace(gltfShape_19)
const transform_59 = new Transform({
  position: new Vector3(127.5, 0, 17),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.598076211353317, 3.5980762113533156, 3.598076211353317)
})
light_02_11.addComponentOrReplace(transform_59)
engine.addEntity(light_02_11)

const light_02_12 = new Entity()
light_02_12.setParent(scene)
light_02_12.addComponentOrReplace(gltfShape_19)
const transform_60 = new Transform({
  position: new Vector3(126.5, 0, 63.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.598076211353317, 3.5980762113533156, 3.598076211353317)
})
light_02_12.addComponentOrReplace(transform_60)
engine.addEntity(light_02_12)

const light_02_13 = new Entity()
light_02_13.setParent(scene)
light_02_13.addComponentOrReplace(gltfShape_19)
const transform_61 = new Transform({
  position: new Vector3(127.5, 0, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.598076211353317, 3.5980762113533156, 3.598076211353317)
})
light_02_13.addComponentOrReplace(transform_61)
engine.addEntity(light_02_13)

const chineseLantern_05 = new Entity()
chineseLantern_05.setParent(scene)
const gltfShape_20 = new GLTFShape('models/ChineseLantern_05/ChineseLantern_05.glb')
chineseLantern_05.addComponentOrReplace(gltfShape_20)
const transform_62 = new Transform({
  position: new Vector3(106.5, 3, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05.addComponentOrReplace(transform_62)
engine.addEntity(chineseLantern_05)

const floorHexa_01_19 = new Entity()
floorHexa_01_19.setParent(scene)
floorHexa_01_19.addComponentOrReplace(gltfShape_17)
const transform_63 = new Transform({
  position: new Vector3(60.5, 0, 34.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_19.addComponentOrReplace(transform_63)
engine.addEntity(floorHexa_01_19)

const floorHexa_01_20 = new Entity()
floorHexa_01_20.setParent(scene)
floorHexa_01_20.addComponentOrReplace(gltfShape_17)
const transform_64 = new Transform({
  position: new Vector3(61.5, 0, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_20.addComponentOrReplace(transform_64)
engine.addEntity(floorHexa_01_20)

const floorHexa_01_21 = new Entity()
floorHexa_01_21.setParent(scene)
floorHexa_01_21.addComponentOrReplace(gltfShape_17)
const transform_65 = new Transform({
  position: new Vector3(65.5, 0, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_21.addComponentOrReplace(transform_65)
engine.addEntity(floorHexa_01_21)

const floorHexa_01_22 = new Entity()
floorHexa_01_22.setParent(scene)
floorHexa_01_22.addComponentOrReplace(gltfShape_17)
const transform_66 = new Transform({
  position: new Vector3(60.5, 0, 34.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_22.addComponentOrReplace(transform_66)
engine.addEntity(floorHexa_01_22)

const floorHexa_01_23 = new Entity()
floorHexa_01_23.setParent(scene)
floorHexa_01_23.addComponentOrReplace(gltfShape_17)
const transform_67 = new Transform({
  position: new Vector3(64.5, 0, 34.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_23.addComponentOrReplace(transform_67)
engine.addEntity(floorHexa_01_23)

const floorHexa_01_24 = new Entity()
floorHexa_01_24.setParent(scene)
floorHexa_01_24.addComponentOrReplace(gltfShape_17)
const transform_68 = new Transform({
  position: new Vector3(59.5, 0, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_24.addComponentOrReplace(transform_68)
engine.addEntity(floorHexa_01_24)

const floorHexa_01_25 = new Entity()
floorHexa_01_25.setParent(scene)
floorHexa_01_25.addComponentOrReplace(gltfShape_17)
const transform_69 = new Transform({
  position: new Vector3(60.5, 0, 28.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_25.addComponentOrReplace(transform_69)
engine.addEntity(floorHexa_01_25)

const floorHexa_01_26 = new Entity()
floorHexa_01_26.setParent(scene)
floorHexa_01_26.addComponentOrReplace(gltfShape_17)
const transform_70 = new Transform({
  position: new Vector3(59.5, 0, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_26.addComponentOrReplace(transform_70)
engine.addEntity(floorHexa_01_26)

const floorHexa_01_27 = new Entity()
floorHexa_01_27.setParent(scene)
floorHexa_01_27.addComponentOrReplace(gltfShape_17)
const transform_71 = new Transform({
  position: new Vector3(60.5, 0, 37.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_27.addComponentOrReplace(transform_71)
engine.addEntity(floorHexa_01_27)

const floorHexa_01_28 = new Entity()
floorHexa_01_28.setParent(scene)
floorHexa_01_28.addComponentOrReplace(gltfShape_17)
const transform_72 = new Transform({
  position: new Vector3(62.5, 0, 37.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_28.addComponentOrReplace(transform_72)
engine.addEntity(floorHexa_01_28)

const floorHexa_01_29 = new Entity()
floorHexa_01_29.setParent(scene)
floorHexa_01_29.addComponentOrReplace(gltfShape_17)
const transform_73 = new Transform({
  position: new Vector3(64.5, 0, 37.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorHexa_01_29.addComponentOrReplace(transform_73)
engine.addEntity(floorHexa_01_29)

const chineseLantern_05_2 = new Entity()
chineseLantern_05_2.setParent(scene)
chineseLantern_05_2.addComponentOrReplace(gltfShape_20)
const transform_74 = new Transform({
  position: new Vector3(108.5, 3, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_2.addComponentOrReplace(transform_74)
engine.addEntity(chineseLantern_05_2)

const chineseLantern_05_3 = new Entity()
chineseLantern_05_3.setParent(scene)
chineseLantern_05_3.addComponentOrReplace(gltfShape_20)
const transform_75 = new Transform({
  position: new Vector3(110.5, 3, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_3.addComponentOrReplace(transform_75)
engine.addEntity(chineseLantern_05_3)

const chineseLantern_05_4 = new Entity()
chineseLantern_05_4.setParent(scene)
chineseLantern_05_4.addComponentOrReplace(gltfShape_20)
const transform_76 = new Transform({
  position: new Vector3(112.5, 3, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_4.addComponentOrReplace(transform_76)
engine.addEntity(chineseLantern_05_4)

const chineseLantern_05_5 = new Entity()
chineseLantern_05_5.setParent(scene)
chineseLantern_05_5.addComponentOrReplace(gltfShape_20)
const transform_77 = new Transform({
  position: new Vector3(114.5, 3, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_5.addComponentOrReplace(transform_77)
engine.addEntity(chineseLantern_05_5)

const chineseLantern_05_6 = new Entity()
chineseLantern_05_6.setParent(scene)
chineseLantern_05_6.addComponentOrReplace(gltfShape_20)
const transform_78 = new Transform({
  position: new Vector3(116, 3, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_6.addComponentOrReplace(transform_78)
engine.addEntity(chineseLantern_05_6)

const chineseLantern_05_7 = new Entity()
chineseLantern_05_7.setParent(scene)
chineseLantern_05_7.addComponentOrReplace(gltfShape_20)
const transform_79 = new Transform({
  position: new Vector3(117.5, 3, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_7.addComponentOrReplace(transform_79)
engine.addEntity(chineseLantern_05_7)

const chineseLantern_05_8 = new Entity()
chineseLantern_05_8.setParent(scene)
chineseLantern_05_8.addComponentOrReplace(gltfShape_20)
const transform_80 = new Transform({
  position: new Vector3(119, 3, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_8.addComponentOrReplace(transform_80)
engine.addEntity(chineseLantern_05_8)

const chineseLantern_05_9 = new Entity()
chineseLantern_05_9.setParent(scene)
chineseLantern_05_9.addComponentOrReplace(gltfShape_20)
const transform_81 = new Transform({
  position: new Vector3(121, 3, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_9.addComponentOrReplace(transform_81)
engine.addEntity(chineseLantern_05_9)

const chineseLantern_05_10 = new Entity()
chineseLantern_05_10.setParent(scene)
chineseLantern_05_10.addComponentOrReplace(gltfShape_20)
const transform_82 = new Transform({
  position: new Vector3(123, 3, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_10.addComponentOrReplace(transform_82)
engine.addEntity(chineseLantern_05_10)

const chineseLantern_05_11 = new Entity()
chineseLantern_05_11.setParent(scene)
chineseLantern_05_11.addComponentOrReplace(gltfShape_20)
const transform_83 = new Transform({
  position: new Vector3(104.5, 3, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_11.addComponentOrReplace(transform_83)
engine.addEntity(chineseLantern_05_11)

const chineseLantern_05_12 = new Entity()
chineseLantern_05_12.setParent(scene)
chineseLantern_05_12.addComponentOrReplace(gltfShape_20)
const transform_84 = new Transform({
  position: new Vector3(102.5, 3, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_12.addComponentOrReplace(transform_84)
engine.addEntity(chineseLantern_05_12)

const chineseLantern_05_13 = new Entity()
chineseLantern_05_13.setParent(scene)
chineseLantern_05_13.addComponentOrReplace(gltfShape_20)
const transform_85 = new Transform({
  position: new Vector3(100.5, 3, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_13.addComponentOrReplace(transform_85)
engine.addEntity(chineseLantern_05_13)

const chineseLantern_05_14 = new Entity()
chineseLantern_05_14.setParent(scene)
chineseLantern_05_14.addComponentOrReplace(gltfShape_20)
const transform_86 = new Transform({
  position: new Vector3(98.5, 3, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_14.addComponentOrReplace(transform_86)
engine.addEntity(chineseLantern_05_14)

const chineseLantern_05_15 = new Entity()
chineseLantern_05_15.setParent(scene)
chineseLantern_05_15.addComponentOrReplace(gltfShape_20)
const transform_87 = new Transform({
  position: new Vector3(96.5, 3, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_15.addComponentOrReplace(transform_87)
engine.addEntity(chineseLantern_05_15)

const chineseLantern_05_16 = new Entity()
chineseLantern_05_16.setParent(scene)
chineseLantern_05_16.addComponentOrReplace(gltfShape_20)
const transform_88 = new Transform({
  position: new Vector3(94.5, 3, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_16.addComponentOrReplace(transform_88)
engine.addEntity(chineseLantern_05_16)

const chineseLantern_05_17 = new Entity()
chineseLantern_05_17.setParent(scene)
chineseLantern_05_17.addComponentOrReplace(gltfShape_20)
const transform_89 = new Transform({
  position: new Vector3(92.5, 3, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_17.addComponentOrReplace(transform_89)
engine.addEntity(chineseLantern_05_17)

const chineseLantern_05_18 = new Entity()
chineseLantern_05_18.setParent(scene)
chineseLantern_05_18.addComponentOrReplace(gltfShape_20)
const transform_90 = new Transform({
  position: new Vector3(90.5, 3, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_18.addComponentOrReplace(transform_90)
engine.addEntity(chineseLantern_05_18)

const chineseLantern_05_19 = new Entity()
chineseLantern_05_19.setParent(scene)
chineseLantern_05_19.addComponentOrReplace(gltfShape_20)
const transform_91 = new Transform({
  position: new Vector3(88.5, 3, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_19.addComponentOrReplace(transform_91)
engine.addEntity(chineseLantern_05_19)

const chineseLantern_05_20 = new Entity()
chineseLantern_05_20.setParent(scene)
chineseLantern_05_20.addComponentOrReplace(gltfShape_20)
const transform_92 = new Transform({
  position: new Vector3(86.5, 3, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_20.addComponentOrReplace(transform_92)
engine.addEntity(chineseLantern_05_20)

const chineseLantern_05_21 = new Entity()
chineseLantern_05_21.setParent(scene)
chineseLantern_05_21.addComponentOrReplace(gltfShape_20)
const transform_93 = new Transform({
  position: new Vector3(84.5, 3, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_21.addComponentOrReplace(transform_93)
engine.addEntity(chineseLantern_05_21)

const chineseLantern_05_22 = new Entity()
chineseLantern_05_22.setParent(scene)
chineseLantern_05_22.addComponentOrReplace(gltfShape_20)
const transform_94 = new Transform({
  position: new Vector3(82.5, 3, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_22.addComponentOrReplace(transform_94)
engine.addEntity(chineseLantern_05_22)

const chineseLantern_05_23 = new Entity()
chineseLantern_05_23.setParent(scene)
chineseLantern_05_23.addComponentOrReplace(gltfShape_20)
const transform_95 = new Transform({
  position: new Vector3(80.5, 3, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_23.addComponentOrReplace(transform_95)
engine.addEntity(chineseLantern_05_23)

const chineseLantern_05_24 = new Entity()
chineseLantern_05_24.setParent(scene)
chineseLantern_05_24.addComponentOrReplace(gltfShape_20)
const transform_96 = new Transform({
  position: new Vector3(78.5, 3, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_24.addComponentOrReplace(transform_96)
engine.addEntity(chineseLantern_05_24)

const chineseLantern_05_25 = new Entity()
chineseLantern_05_25.setParent(scene)
chineseLantern_05_25.addComponentOrReplace(gltfShape_20)
const transform_97 = new Transform({
  position: new Vector3(76, 3, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_25.addComponentOrReplace(transform_97)
engine.addEntity(chineseLantern_05_25)

const chineseLantern_05_26 = new Entity()
chineseLantern_05_26.setParent(scene)
chineseLantern_05_26.addComponentOrReplace(gltfShape_20)
const transform_98 = new Transform({
  position: new Vector3(74, 3, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_26.addComponentOrReplace(transform_98)
engine.addEntity(chineseLantern_05_26)

const chineseLantern_05_27 = new Entity()
chineseLantern_05_27.setParent(scene)
chineseLantern_05_27.addComponentOrReplace(gltfShape_20)
const transform_99 = new Transform({
  position: new Vector3(74, 3, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_27.addComponentOrReplace(transform_99)
engine.addEntity(chineseLantern_05_27)

const chineseLantern_05_28 = new Entity()
chineseLantern_05_28.setParent(scene)
chineseLantern_05_28.addComponentOrReplace(gltfShape_20)
const transform_100 = new Transform({
  position: new Vector3(72, 3, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_28.addComponentOrReplace(transform_100)
engine.addEntity(chineseLantern_05_28)

const chineseLantern_05_29 = new Entity()
chineseLantern_05_29.setParent(scene)
chineseLantern_05_29.addComponentOrReplace(gltfShape_20)
const transform_101 = new Transform({
  position: new Vector3(70, 3, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_29.addComponentOrReplace(transform_101)
engine.addEntity(chineseLantern_05_29)

const chineseLantern_05_30 = new Entity()
chineseLantern_05_30.setParent(scene)
chineseLantern_05_30.addComponentOrReplace(gltfShape_20)
const transform_102 = new Transform({
  position: new Vector3(68, 3, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_30.addComponentOrReplace(transform_102)
engine.addEntity(chineseLantern_05_30)

const chineseLantern_05_31 = new Entity()
chineseLantern_05_31.setParent(scene)
chineseLantern_05_31.addComponentOrReplace(gltfShape_20)
const transform_103 = new Transform({
  position: new Vector3(68, 3, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_31.addComponentOrReplace(transform_103)
engine.addEntity(chineseLantern_05_31)

const chineseLantern_05_32 = new Entity()
chineseLantern_05_32.setParent(scene)
chineseLantern_05_32.addComponentOrReplace(gltfShape_20)
const transform_104 = new Transform({
  position: new Vector3(70, 3, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_32.addComponentOrReplace(transform_104)
engine.addEntity(chineseLantern_05_32)

const chineseLantern_05_33 = new Entity()
chineseLantern_05_33.setParent(scene)
chineseLantern_05_33.addComponentOrReplace(gltfShape_20)
const transform_105 = new Transform({
  position: new Vector3(72, 3, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_33.addComponentOrReplace(transform_105)
engine.addEntity(chineseLantern_05_33)

const chineseLantern_05_34 = new Entity()
chineseLantern_05_34.setParent(scene)
chineseLantern_05_34.addComponentOrReplace(gltfShape_20)
const transform_106 = new Transform({
  position: new Vector3(74, 3, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_34.addComponentOrReplace(transform_106)
engine.addEntity(chineseLantern_05_34)

const chineseLantern_05_35 = new Entity()
chineseLantern_05_35.setParent(scene)
chineseLantern_05_35.addComponentOrReplace(gltfShape_20)
const transform_107 = new Transform({
  position: new Vector3(79, 3, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_35.addComponentOrReplace(transform_107)
engine.addEntity(chineseLantern_05_35)

const chineseLantern_05_36 = new Entity()
chineseLantern_05_36.setParent(scene)
chineseLantern_05_36.addComponentOrReplace(gltfShape_20)
const transform_108 = new Transform({
  position: new Vector3(76, 3, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_36.addComponentOrReplace(transform_108)
engine.addEntity(chineseLantern_05_36)

const chineseLantern_05_37 = new Entity()
chineseLantern_05_37.setParent(scene)
chineseLantern_05_37.addComponentOrReplace(gltfShape_20)
const transform_109 = new Transform({
  position: new Vector3(80.5, 3, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_37.addComponentOrReplace(transform_109)
engine.addEntity(chineseLantern_05_37)

const chineseLantern_05_38 = new Entity()
chineseLantern_05_38.setParent(scene)
chineseLantern_05_38.addComponentOrReplace(gltfShape_20)
const transform_110 = new Transform({
  position: new Vector3(82.5, 3, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_38.addComponentOrReplace(transform_110)
engine.addEntity(chineseLantern_05_38)

const chineseLantern_05_39 = new Entity()
chineseLantern_05_39.setParent(scene)
chineseLantern_05_39.addComponentOrReplace(gltfShape_20)
const transform_111 = new Transform({
  position: new Vector3(84.5, 3, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_39.addComponentOrReplace(transform_111)
engine.addEntity(chineseLantern_05_39)

const chineseLantern_05_40 = new Entity()
chineseLantern_05_40.setParent(scene)
chineseLantern_05_40.addComponentOrReplace(gltfShape_20)
const transform_112 = new Transform({
  position: new Vector3(86.5, 3, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_40.addComponentOrReplace(transform_112)
engine.addEntity(chineseLantern_05_40)

const chineseLantern_05_41 = new Entity()
chineseLantern_05_41.setParent(scene)
chineseLantern_05_41.addComponentOrReplace(gltfShape_20)
const transform_113 = new Transform({
  position: new Vector3(88.5, 3, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_41.addComponentOrReplace(transform_113)
engine.addEntity(chineseLantern_05_41)

const chineseLantern_05_42 = new Entity()
chineseLantern_05_42.setParent(scene)
chineseLantern_05_42.addComponentOrReplace(gltfShape_20)
const transform_114 = new Transform({
  position: new Vector3(90.5, 3, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_42.addComponentOrReplace(transform_114)
engine.addEntity(chineseLantern_05_42)

const chineseLantern_05_43 = new Entity()
chineseLantern_05_43.setParent(scene)
chineseLantern_05_43.addComponentOrReplace(gltfShape_20)
const transform_115 = new Transform({
  position: new Vector3(92.5, 3, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_43.addComponentOrReplace(transform_115)
engine.addEntity(chineseLantern_05_43)

const chineseLantern_05_44 = new Entity()
chineseLantern_05_44.setParent(scene)
chineseLantern_05_44.addComponentOrReplace(gltfShape_20)
const transform_116 = new Transform({
  position: new Vector3(94.5, 3, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_44.addComponentOrReplace(transform_116)
engine.addEntity(chineseLantern_05_44)

const chineseLantern_05_45 = new Entity()
chineseLantern_05_45.setParent(scene)
chineseLantern_05_45.addComponentOrReplace(gltfShape_20)
const transform_117 = new Transform({
  position: new Vector3(96.5, 3, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_45.addComponentOrReplace(transform_117)
engine.addEntity(chineseLantern_05_45)

const chineseLantern_05_46 = new Entity()
chineseLantern_05_46.setParent(scene)
chineseLantern_05_46.addComponentOrReplace(gltfShape_20)
const transform_118 = new Transform({
  position: new Vector3(98.5, 3, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_46.addComponentOrReplace(transform_118)
engine.addEntity(chineseLantern_05_46)

const chineseLantern_05_47 = new Entity()
chineseLantern_05_47.setParent(scene)
chineseLantern_05_47.addComponentOrReplace(gltfShape_20)
const transform_119 = new Transform({
  position: new Vector3(100.5, 3, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_47.addComponentOrReplace(transform_119)
engine.addEntity(chineseLantern_05_47)

const chineseLantern_05_48 = new Entity()
chineseLantern_05_48.setParent(scene)
chineseLantern_05_48.addComponentOrReplace(gltfShape_20)
const transform_120 = new Transform({
  position: new Vector3(102.5, 3, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_48.addComponentOrReplace(transform_120)
engine.addEntity(chineseLantern_05_48)

const chineseLantern_05_49 = new Entity()
chineseLantern_05_49.setParent(scene)
chineseLantern_05_49.addComponentOrReplace(gltfShape_20)
const transform_121 = new Transform({
  position: new Vector3(104.5, 3, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_49.addComponentOrReplace(transform_121)
engine.addEntity(chineseLantern_05_49)

const chineseLantern_05_50 = new Entity()
chineseLantern_05_50.setParent(scene)
chineseLantern_05_50.addComponentOrReplace(gltfShape_20)
const transform_122 = new Transform({
  position: new Vector3(104.5, 3, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_50.addComponentOrReplace(transform_122)
engine.addEntity(chineseLantern_05_50)

const chineseLantern_05_51 = new Entity()
chineseLantern_05_51.setParent(scene)
chineseLantern_05_51.addComponentOrReplace(gltfShape_20)
const transform_123 = new Transform({
  position: new Vector3(106.5, 3, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_51.addComponentOrReplace(transform_123)
engine.addEntity(chineseLantern_05_51)

const chineseLantern_05_52 = new Entity()
chineseLantern_05_52.setParent(scene)
chineseLantern_05_52.addComponentOrReplace(gltfShape_20)
const transform_124 = new Transform({
  position: new Vector3(108.5, 3, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_52.addComponentOrReplace(transform_124)
engine.addEntity(chineseLantern_05_52)

const chineseLantern_05_53 = new Entity()
chineseLantern_05_53.setParent(scene)
chineseLantern_05_53.addComponentOrReplace(gltfShape_20)
const transform_125 = new Transform({
  position: new Vector3(110.5, 3, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_53.addComponentOrReplace(transform_125)
engine.addEntity(chineseLantern_05_53)

const chineseLantern_05_54 = new Entity()
chineseLantern_05_54.setParent(scene)
chineseLantern_05_54.addComponentOrReplace(gltfShape_20)
const transform_126 = new Transform({
  position: new Vector3(112.5, 3, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_54.addComponentOrReplace(transform_126)
engine.addEntity(chineseLantern_05_54)

const chineseLantern_05_55 = new Entity()
chineseLantern_05_55.setParent(scene)
chineseLantern_05_55.addComponentOrReplace(gltfShape_20)
const transform_127 = new Transform({
  position: new Vector3(114.5, 3, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_55.addComponentOrReplace(transform_127)
engine.addEntity(chineseLantern_05_55)

const chineseLantern_05_56 = new Entity()
chineseLantern_05_56.setParent(scene)
chineseLantern_05_56.addComponentOrReplace(gltfShape_20)
const transform_128 = new Transform({
  position: new Vector3(116, 3, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_56.addComponentOrReplace(transform_128)
engine.addEntity(chineseLantern_05_56)

const chineseLantern_05_57 = new Entity()
chineseLantern_05_57.setParent(scene)
chineseLantern_05_57.addComponentOrReplace(gltfShape_20)
const transform_129 = new Transform({
  position: new Vector3(117.5, 3, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_57.addComponentOrReplace(transform_129)
engine.addEntity(chineseLantern_05_57)

const chineseLantern_05_58 = new Entity()
chineseLantern_05_58.setParent(scene)
chineseLantern_05_58.addComponentOrReplace(gltfShape_20)
const transform_130 = new Transform({
  position: new Vector3(119, 3, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_58.addComponentOrReplace(transform_130)
engine.addEntity(chineseLantern_05_58)

const chineseLantern_05_59 = new Entity()
chineseLantern_05_59.setParent(scene)
chineseLantern_05_59.addComponentOrReplace(gltfShape_20)
const transform_131 = new Transform({
  position: new Vector3(121, 3, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_59.addComponentOrReplace(transform_131)
engine.addEntity(chineseLantern_05_59)

const chineseLantern_05_60 = new Entity()
chineseLantern_05_60.setParent(scene)
chineseLantern_05_60.addComponentOrReplace(gltfShape_20)
const transform_132 = new Transform({
  position: new Vector3(123, 3, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_60.addComponentOrReplace(transform_132)
engine.addEntity(chineseLantern_05_60)

const chineseLantern_05_61 = new Entity()
chineseLantern_05_61.setParent(scene)
chineseLantern_05_61.addComponentOrReplace(gltfShape_20)
const transform_133 = new Transform({
  position: new Vector3(123, 3, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chineseLantern_05_61.addComponentOrReplace(transform_133)
engine.addEntity(chineseLantern_05_61)

const bonesSkull_01 = new Entity()
bonesSkull_01.setParent(scene)
const gltfShape_21 = new GLTFShape('models/BonesSkull_01/BonesSkull_01.glb')
bonesSkull_01.addComponentOrReplace(gltfShape_21)
const transform_134 = new Transform({
  position: new Vector3(63, 0, 32),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bonesSkull_01.addComponentOrReplace(transform_134)
engine.addEntity(bonesSkull_01)

const bonesSkull_01_2 = new Entity()
bonesSkull_01_2.setParent(scene)
bonesSkull_01_2.addComponentOrReplace(gltfShape_21)
const transform_135 = new Transform({
  position: new Vector3(62.5, 0, 32.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bonesSkull_01_2.addComponentOrReplace(transform_135)
engine.addEntity(bonesSkull_01_2)

const bonesSkull_01_3 = new Entity()
bonesSkull_01_3.setParent(scene)
bonesSkull_01_3.addComponentOrReplace(gltfShape_21)
const transform_136 = new Transform({
  position: new Vector3(63.5, 0, 32),
  rotation: new Quaternion(-0.13794968964147145, 0.6935199226610739, -0.13794968964147145, 0.6935199226610739),
  scale: new Vector3(1, 1, 1)
})
bonesSkull_01_3.addComponentOrReplace(transform_136)
engine.addEntity(bonesSkull_01_3)

const bonesSkull_01_4 = new Entity()
bonesSkull_01_4.setParent(scene)
bonesSkull_01_4.addComponentOrReplace(gltfShape_21)
const transform_137 = new Transform({
  position: new Vector3(62.5, 0, 33),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bonesSkull_01_4.addComponentOrReplace(transform_137)
engine.addEntity(bonesSkull_01_4)

const bonesSkull_01_5 = new Entity()
bonesSkull_01_5.setParent(scene)
bonesSkull_01_5.addComponentOrReplace(gltfShape_21)
const transform_138 = new Transform({
  position: new Vector3(63, 0, 33),
  rotation: new Quaternion(-0.20526226376117868, 0.6766590005871762, -0.20526226376117868, 0.6766590005871763),
  scale: new Vector3(1, 1, 1)
})
bonesSkull_01_5.addComponentOrReplace(transform_138)
engine.addEntity(bonesSkull_01_5)

const bonesSkull_01_6 = new Entity()
bonesSkull_01_6.setParent(scene)
bonesSkull_01_6.addComponentOrReplace(gltfShape_21)
const transform_139 = new Transform({
  position: new Vector3(63, 0, 32.5),
  rotation: new Quaternion(0, 0.6343932841636455, 0, 0.773010453362737),
  scale: new Vector3(1, 1, 1)
})
bonesSkull_01_6.addComponentOrReplace(transform_139)
engine.addEntity(bonesSkull_01_6)

const bonesSkull_01_7 = new Entity()
bonesSkull_01_7.setParent(scene)
bonesSkull_01_7.addComponentOrReplace(gltfShape_21)
const transform_140 = new Transform({
  position: new Vector3(63, 0, 33.5),
  rotation: new Quaternion(0, 0.8314696123025451, 0, 0.5555702330196022),
  scale: new Vector3(1, 1, 1)
})
bonesSkull_01_7.addComponentOrReplace(transform_140)
engine.addEntity(bonesSkull_01_7)

const bonesSkull_01_8 = new Entity()
bonesSkull_01_8.setParent(scene)
bonesSkull_01_8.addComponentOrReplace(gltfShape_21)
const transform_141 = new Transform({
  position: new Vector3(64, 0, 33),
  rotation: new Quaternion(0.06218141555799901, 0.7692881967445466, 0.07576827408347289, 0.631338507103075),
  scale: new Vector3(1, 1, 1)
})
bonesSkull_01_8.addComponentOrReplace(transform_141)
engine.addEntity(bonesSkull_01_8)

const bonesSkull_01_9 = new Entity()
bonesSkull_01_9.setParent(scene)
bonesSkull_01_9.addComponentOrReplace(gltfShape_21)
const transform_142 = new Transform({
  position: new Vector3(63.5, 0, 33),
  rotation: new Quaternion(0.13794968964147158, 0.6935199226610738, 0.13794968964147153, 0.6935199226610739),
  scale: new Vector3(1, 1, 1)
})
bonesSkull_01_9.addComponentOrReplace(transform_142)
engine.addEntity(bonesSkull_01_9)

const bonesSkull_01_10 = new Entity()
bonesSkull_01_10.setParent(scene)
bonesSkull_01_10.addComponentOrReplace(gltfShape_21)
const transform_143 = new Transform({
  position: new Vector3(62.5, 0, 34),
  rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475),
  scale: new Vector3(1, 1, 1)
})
bonesSkull_01_10.addComponentOrReplace(transform_143)
engine.addEntity(bonesSkull_01_10)

const bonesSkull_01_11 = new Entity()
bonesSkull_01_11.setParent(scene)
bonesSkull_01_11.addComponentOrReplace(gltfShape_21)
const transform_144 = new Transform({
  position: new Vector3(63.5, 0, 34),
  rotation: new Quaternion(-0.295818293546946, 0.5861029708014092, -0.24277179945310556, 0.7141685362791037),
  scale: new Vector3(1, 1, 1)
})
bonesSkull_01_11.addComponentOrReplace(transform_144)
engine.addEntity(bonesSkull_01_11)

const bonesSkull_01_12 = new Entity()
bonesSkull_01_12.setParent(scene)
bonesSkull_01_12.addComponentOrReplace(gltfShape_21)
const transform_145 = new Transform({
  position: new Vector3(63.5, 0, 33.5),
  rotation: new Quaternion(-0.12376399009235474, 0.7581572742560002, -0.1508068582683696, 0.6222035950943673),
  scale: new Vector3(1, 1, 1)
})
bonesSkull_01_12.addComponentOrReplace(transform_145)
engine.addEntity(bonesSkull_01_12)

const bonesSkull_01_13 = new Entity()
bonesSkull_01_13.setParent(scene)
bonesSkull_01_13.addComponentOrReplace(gltfShape_21)
const transform_146 = new Transform({
  position: new Vector3(63, 2, 33),
  rotation: new Quaternion(0, 0.7071067811865476, 0, 0.7071067811865477),
  scale: new Vector3(1.8660254037844386, 1.8660254037844386, 1.8660254037844386)
})
bonesSkull_01_13.addComponentOrReplace(transform_146)
engine.addEntity(bonesSkull_01_13)

const bonesSkull_01_14 = new Entity()
bonesSkull_01_14.setParent(scene)
bonesSkull_01_14.addComponentOrReplace(gltfShape_21)
const transform_147 = new Transform({
  position: new Vector3(63.5, 0, 32.5),
  rotation: new Quaternion(0.12601436542906044, 0.3555657909763701, 0.20067219947940296, 0.904115045969792),
  scale: new Vector3(1, 1, 1)
})
bonesSkull_01_14.addComponentOrReplace(transform_147)
engine.addEntity(bonesSkull_01_14)

const door_01 = new Entity()
door_01.setParent(scene)
const gltfShape_22 = new GLTFShape('models/Door_01/Door_01.glb')
door_01.addComponentOrReplace(gltfShape_22)
const transform_148 = new Transform({
  position: new Vector3(124.5, 0, 33),
  rotation: new Quaternion(0, -0.7071067811865475, 0, 0.7071067811865475),
  scale: new Vector3(3.598076211353317, 3.598076211353317, 3.598076211353317)
})
door_01.addComponentOrReplace(transform_148)
engine.addEntity(door_01)

const book_02 = new Entity()
book_02.setParent(scene)
const gltfShape_23 = new GLTFShape('models/Book_02/Book_02.glb')
book_02.addComponentOrReplace(gltfShape_23)
const transform_149 = new Transform({
  position: new Vector3(17.5, 4.5, 50),
  rotation: new Quaternion(0, 0.5555702330196023, 0, 0.8314696123025452),
  scale: new Vector3(1, 1, 1)
})
book_02.addComponentOrReplace(transform_149)
engine.addEntity(book_02)

const oxygenTube_01 = new Entity()
oxygenTube_01.setParent(scene)
const gltfShape_24 = new GLTFShape('models/OxygenTube_01/OxygenTube_01.glb')
oxygenTube_01.addComponentOrReplace(gltfShape_24)
const transform_150 = new Transform({
  position: new Vector3(17.5, 4.5, 51.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
oxygenTube_01.addComponentOrReplace(transform_150)
engine.addEntity(oxygenTube_01)

const trunk_02 = new Entity()
trunk_02.setParent(scene)
const gltfShape_25 = new GLTFShape('models/Trunk_02/Trunk_02.glb')
trunk_02.addComponentOrReplace(gltfShape_25)
const transform_151 = new Transform({
  position: new Vector3(17, 4.5, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
trunk_02.addComponentOrReplace(transform_151)
engine.addEntity(trunk_02)

const bonesSkull_01_15 = new Entity()
bonesSkull_01_15.setParent(scene)
bonesSkull_01_15.addComponentOrReplace(gltfShape_21)
const transform_152 = new Transform({
  position: new Vector3(18.5, 4.5, 50.5),
  rotation: new Quaternion(0.4619397662556433, 0.6913417161825449, 0.30865828381745514, 0.4619397662556434),
  scale: new Vector3(1, 1, 1)
})
bonesSkull_01_15.addComponentOrReplace(transform_152)
engine.addEntity(bonesSkull_01_15)

const tree_Forest_Turquoise_02_2 = new Entity()
tree_Forest_Turquoise_02_2.setParent(scene)
tree_Forest_Turquoise_02_2.addComponentOrReplace(gltfShape_13)
const transform_153 = new Transform({
  position: new Vector3(30, 0, 3.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Turquoise_02_2.addComponentOrReplace(transform_153)
engine.addEntity(tree_Forest_Turquoise_02_2)

const tree_Forest_Turquoise_03_7 = new Entity()
tree_Forest_Turquoise_03_7.setParent(scene)
tree_Forest_Turquoise_03_7.addComponentOrReplace(gltfShape_6)
const transform_154 = new Transform({
  position: new Vector3(31.5, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Turquoise_03_7.addComponentOrReplace(transform_154)
engine.addEntity(tree_Forest_Turquoise_03_7)

const tree_Forest_Turquoise_03_8 = new Entity()
tree_Forest_Turquoise_03_8.setParent(scene)
tree_Forest_Turquoise_03_8.addComponentOrReplace(gltfShape_6)
const transform_155 = new Transform({
  position: new Vector3(40, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Turquoise_03_8.addComponentOrReplace(transform_155)
engine.addEntity(tree_Forest_Turquoise_03_8)

const tree_Forest_Turquoise_03_9 = new Entity()
tree_Forest_Turquoise_03_9.setParent(scene)
tree_Forest_Turquoise_03_9.addComponentOrReplace(gltfShape_6)
const transform_156 = new Transform({
  position: new Vector3(56, 0, 7.5),
  rotation: new Quaternion(0, 0.9999999999999998, 0, 5.551115123125783e-17),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Turquoise_03_9.addComponentOrReplace(transform_156)
engine.addEntity(tree_Forest_Turquoise_03_9)

const tree_Forest_Turquoise_03_10 = new Entity()
tree_Forest_Turquoise_03_10.setParent(scene)
tree_Forest_Turquoise_03_10.addComponentOrReplace(gltfShape_6)
const transform_157 = new Transform({
  position: new Vector3(59, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Turquoise_03_10.addComponentOrReplace(transform_157)
engine.addEntity(tree_Forest_Turquoise_03_10)

const tree_Forest_Turquoise_03_11 = new Entity()
tree_Forest_Turquoise_03_11.setParent(scene)
tree_Forest_Turquoise_03_11.addComponentOrReplace(gltfShape_6)
const transform_158 = new Transform({
  position: new Vector3(68.5, 0, 8.5),
  rotation: new Quaternion(0, 0.8314696123025452, 0, -0.555570233019602),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Turquoise_03_11.addComponentOrReplace(transform_158)
engine.addEntity(tree_Forest_Turquoise_03_11)

const tree_Forest_Turquoise_03_12 = new Entity()
tree_Forest_Turquoise_03_12.setParent(scene)
tree_Forest_Turquoise_03_12.addComponentOrReplace(gltfShape_6)
const transform_159 = new Transform({
  position: new Vector3(65, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Turquoise_03_12.addComponentOrReplace(transform_159)
engine.addEntity(tree_Forest_Turquoise_03_12)

const tree_Forest_Turquoise_03_13 = new Entity()
tree_Forest_Turquoise_03_13.setParent(scene)
tree_Forest_Turquoise_03_13.addComponentOrReplace(gltfShape_6)
const transform_160 = new Transform({
  position: new Vector3(73, 0, 6.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Turquoise_03_13.addComponentOrReplace(transform_160)
engine.addEntity(tree_Forest_Turquoise_03_13)

const tree_Forest_Turquoise_03_14 = new Entity()
tree_Forest_Turquoise_03_14.setParent(scene)
tree_Forest_Turquoise_03_14.addComponentOrReplace(gltfShape_6)
const transform_161 = new Transform({
  position: new Vector3(78.5, 0, 5.5),
  rotation: new Quaternion(0, 0.9999999999999999, 0, 1.3877787807814457e-16),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Turquoise_03_14.addComponentOrReplace(transform_161)
engine.addEntity(tree_Forest_Turquoise_03_14)

const tree_Forest_Turquoise_03_15 = new Entity()
tree_Forest_Turquoise_03_15.setParent(scene)
tree_Forest_Turquoise_03_15.addComponentOrReplace(gltfShape_6)
const transform_162 = new Transform({
  position: new Vector3(83.5, 0, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Turquoise_03_15.addComponentOrReplace(transform_162)
engine.addEntity(tree_Forest_Turquoise_03_15)

const tree_Forest_Turquoise_03_16 = new Entity()
tree_Forest_Turquoise_03_16.setParent(scene)
tree_Forest_Turquoise_03_16.addComponentOrReplace(gltfShape_6)
const transform_163 = new Transform({
  position: new Vector3(92, 0, 7),
  rotation: new Quaternion(0, 0.9951847266721969, 0, -0.0980171403295605),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Turquoise_03_16.addComponentOrReplace(transform_163)
engine.addEntity(tree_Forest_Turquoise_03_16)

const tree_Forest_Turquoise_03_17 = new Entity()
tree_Forest_Turquoise_03_17.setParent(scene)
tree_Forest_Turquoise_03_17.addComponentOrReplace(gltfShape_6)
const transform_164 = new Transform({
  position: new Vector3(97.5, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Turquoise_03_17.addComponentOrReplace(transform_164)
engine.addEntity(tree_Forest_Turquoise_03_17)

const tree_Forest_Turquoise_03_18 = new Entity()
tree_Forest_Turquoise_03_18.setParent(scene)
tree_Forest_Turquoise_03_18.addComponentOrReplace(gltfShape_6)
const transform_165 = new Transform({
  position: new Vector3(104, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Turquoise_03_18.addComponentOrReplace(transform_165)
engine.addEntity(tree_Forest_Turquoise_03_18)

const tree_Forest_Turquoise_03_19 = new Entity()
tree_Forest_Turquoise_03_19.setParent(scene)
tree_Forest_Turquoise_03_19.addComponentOrReplace(gltfShape_6)
const transform_166 = new Transform({
  position: new Vector3(109.5, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Turquoise_03_19.addComponentOrReplace(transform_166)
engine.addEntity(tree_Forest_Turquoise_03_19)

const tree_Forest_Turquoise_03_20 = new Entity()
tree_Forest_Turquoise_03_20.setParent(scene)
tree_Forest_Turquoise_03_20.addComponentOrReplace(gltfShape_6)
const transform_167 = new Transform({
  position: new Vector3(115.5, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Turquoise_03_20.addComponentOrReplace(transform_167)
engine.addEntity(tree_Forest_Turquoise_03_20)

const tree_Forest_Turquoise_03_21 = new Entity()
tree_Forest_Turquoise_03_21.setParent(scene)
tree_Forest_Turquoise_03_21.addComponentOrReplace(gltfShape_6)
const transform_168 = new Transform({
  position: new Vector3(119, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Turquoise_03_21.addComponentOrReplace(transform_168)
engine.addEntity(tree_Forest_Turquoise_03_21)

const bonesSkull_01_16 = new Entity()
bonesSkull_01_16.setParent(scene)
bonesSkull_01_16.addComponentOrReplace(gltfShape_21)
const transform_169 = new Transform({
  position: new Vector3(46, 0, 25.5),
  rotation: new Quaternion(0.13794968964147158, 0.6935199226610738, 0.13794968964147153, 0.6935199226610739),
  scale: new Vector3(2.4433756729740654, 2.4433756729740654, 2.4433756729740654)
})
bonesSkull_01_16.addComponentOrReplace(transform_169)
engine.addEntity(bonesSkull_01_16)

const tree_Forest_Pink_02_2 = new Entity()
tree_Forest_Pink_02_2.setParent(scene)
tree_Forest_Pink_02_2.addComponentOrReplace(gltfShape_8)
const transform_170 = new Transform({
  position: new Vector3(10, 0, 59.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Pink_02_2.addComponentOrReplace(transform_170)
engine.addEntity(tree_Forest_Pink_02_2)

const tree_Forest_Pink_02_3 = new Entity()
tree_Forest_Pink_02_3.setParent(scene)
tree_Forest_Pink_02_3.addComponentOrReplace(gltfShape_8)
const transform_171 = new Transform({
  position: new Vector3(19, 0, 59.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Pink_02_3.addComponentOrReplace(transform_171)
engine.addEntity(tree_Forest_Pink_02_3)

const tree_Forest_Pink_02_4 = new Entity()
tree_Forest_Pink_02_4.setParent(scene)
tree_Forest_Pink_02_4.addComponentOrReplace(gltfShape_8)
const transform_172 = new Transform({
  position: new Vector3(25.5, 0, 59.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Pink_02_4.addComponentOrReplace(transform_172)
engine.addEntity(tree_Forest_Pink_02_4)

const tree_Forest_Pink_02_5 = new Entity()
tree_Forest_Pink_02_5.setParent(scene)
tree_Forest_Pink_02_5.addComponentOrReplace(gltfShape_8)
const transform_173 = new Transform({
  position: new Vector3(25.5, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Pink_02_5.addComponentOrReplace(transform_173)
engine.addEntity(tree_Forest_Pink_02_5)

const tree_Forest_Pink_02_6 = new Entity()
tree_Forest_Pink_02_6.setParent(scene)
tree_Forest_Pink_02_6.addComponentOrReplace(gltfShape_8)
const transform_174 = new Transform({
  position: new Vector3(21.5, 0, 57.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Pink_02_6.addComponentOrReplace(transform_174)
engine.addEntity(tree_Forest_Pink_02_6)

const tree_Forest_Pink_02_7 = new Entity()
tree_Forest_Pink_02_7.setParent(scene)
tree_Forest_Pink_02_7.addComponentOrReplace(gltfShape_8)
const transform_175 = new Transform({
  position: new Vector3(23, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Pink_02_7.addComponentOrReplace(transform_175)
engine.addEntity(tree_Forest_Pink_02_7)

const tree_Forest_Pink_02_8 = new Entity()
tree_Forest_Pink_02_8.setParent(scene)
tree_Forest_Pink_02_8.addComponentOrReplace(gltfShape_8)
const transform_176 = new Transform({
  position: new Vector3(8, 0, 54.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Pink_02_8.addComponentOrReplace(transform_176)
engine.addEntity(tree_Forest_Pink_02_8)

const tree_Forest_Blue_02 = new Entity()
tree_Forest_Blue_02.setParent(scene)
const gltfShape_26 = new GLTFShape('models/Tree_Forest_Blue_02/Tree_Forest_Blue_02.glb')
tree_Forest_Blue_02.addComponentOrReplace(gltfShape_26)
const transform_177 = new Transform({
  position: new Vector3(14, 0, 46),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Blue_02.addComponentOrReplace(transform_177)
engine.addEntity(tree_Forest_Blue_02)

const tree_Forest_Blue_02_2 = new Entity()
tree_Forest_Blue_02_2.setParent(scene)
tree_Forest_Blue_02_2.addComponentOrReplace(gltfShape_26)
const transform_178 = new Transform({
  position: new Vector3(8.5, 0, 33.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Blue_02_2.addComponentOrReplace(transform_178)
engine.addEntity(tree_Forest_Blue_02_2)

const tree_Forest_Blue_02_3 = new Entity()
tree_Forest_Blue_02_3.setParent(scene)
tree_Forest_Blue_02_3.addComponentOrReplace(gltfShape_26)
const transform_179 = new Transform({
  position: new Vector3(8.5, 0, 18),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Blue_02_3.addComponentOrReplace(transform_179)
engine.addEntity(tree_Forest_Blue_02_3)

const tree_Forest_Blue_02_4 = new Entity()
tree_Forest_Blue_02_4.setParent(scene)
tree_Forest_Blue_02_4.addComponentOrReplace(gltfShape_26)
const transform_180 = new Transform({
  position: new Vector3(8.5, 0, 12.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Blue_02_4.addComponentOrReplace(transform_180)
engine.addEntity(tree_Forest_Blue_02_4)

const tree_Forest_Blue_02_5 = new Entity()
tree_Forest_Blue_02_5.setParent(scene)
tree_Forest_Blue_02_5.addComponentOrReplace(gltfShape_26)
const transform_181 = new Transform({
  position: new Vector3(8.5, 0, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Blue_02_5.addComponentOrReplace(transform_181)
engine.addEntity(tree_Forest_Blue_02_5)

const tree_Forest_Blue_02_6 = new Entity()
tree_Forest_Blue_02_6.setParent(scene)
tree_Forest_Blue_02_6.addComponentOrReplace(gltfShape_26)
const transform_182 = new Transform({
  position: new Vector3(19, 0, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Blue_02_6.addComponentOrReplace(transform_182)
engine.addEntity(tree_Forest_Blue_02_6)

const tree_Forest_Blue_02_7 = new Entity()
tree_Forest_Blue_02_7.setParent(scene)
tree_Forest_Blue_02_7.addComponentOrReplace(gltfShape_26)
const transform_183 = new Transform({
  position: new Vector3(36.5, 0, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Blue_02_7.addComponentOrReplace(transform_183)
engine.addEntity(tree_Forest_Blue_02_7)

const tree_Dead_03 = new Entity()
tree_Dead_03.setParent(scene)
const gltfShape_27 = new GLTFShape('models/Tree_Dead_03/Tree_Dead_03.glb')
tree_Dead_03.addComponentOrReplace(gltfShape_27)
const transform_184 = new Transform({
  position: new Vector3(41, 0, 25.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Dead_03.addComponentOrReplace(transform_184)
engine.addEntity(tree_Dead_03)

const tree_Dead_03_2 = new Entity()
tree_Dead_03_2.setParent(scene)
tree_Dead_03_2.addComponentOrReplace(gltfShape_27)
const transform_185 = new Transform({
  position: new Vector3(42, 0, 22),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Dead_03_2.addComponentOrReplace(transform_185)
engine.addEntity(tree_Dead_03_2)

const tree_Dead_03_3 = new Entity()
tree_Dead_03_3.setParent(scene)
tree_Dead_03_3.addComponentOrReplace(gltfShape_27)
const transform_186 = new Transform({
  position: new Vector3(43, 0, 25.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Dead_03_3.addComponentOrReplace(transform_186)
engine.addEntity(tree_Dead_03_3)

const tree_Leafs_03 = new Entity()
tree_Leafs_03.setParent(scene)
const gltfShape_28 = new GLTFShape('models/Tree_Leafs_03/Tree_Leafs_03.glb')
tree_Leafs_03.addComponentOrReplace(gltfShape_28)
const transform_187 = new Transform({
  position: new Vector3(31.5, 0, 59.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Leafs_03.addComponentOrReplace(transform_187)
engine.addEntity(tree_Leafs_03)

const tree_Leafs_03_2 = new Entity()
tree_Leafs_03_2.setParent(scene)
tree_Leafs_03_2.addComponentOrReplace(gltfShape_28)
const transform_188 = new Transform({
  position: new Vector3(34.5, 0, 59.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Leafs_03_2.addComponentOrReplace(transform_188)
engine.addEntity(tree_Leafs_03_2)

const tree_Leafs_03_3 = new Entity()
tree_Leafs_03_3.setParent(scene)
tree_Leafs_03_3.addComponentOrReplace(gltfShape_28)
const transform_189 = new Transform({
  position: new Vector3(31.5, 0, 59.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Leafs_03_3.addComponentOrReplace(transform_189)
engine.addEntity(tree_Leafs_03_3)

const tree_Leafs_03_4 = new Entity()
tree_Leafs_03_4.setParent(scene)
tree_Leafs_03_4.addComponentOrReplace(gltfShape_28)
const transform_190 = new Transform({
  position: new Vector3(36.5, 0, 60.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Leafs_03_4.addComponentOrReplace(transform_190)
engine.addEntity(tree_Leafs_03_4)

const tree_Forest_Green_04 = new Entity()
tree_Forest_Green_04.setParent(scene)
const gltfShape_29 = new GLTFShape('models/Tree_Forest_Green_04/Tree_Forest_Green_04.glb')
tree_Forest_Green_04.addComponentOrReplace(gltfShape_29)
const transform_191 = new Transform({
  position: new Vector3(29, 0, 60),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Green_04.addComponentOrReplace(transform_191)
engine.addEntity(tree_Forest_Green_04)

const tree_Forest_Green_03 = new Entity()
tree_Forest_Green_03.setParent(scene)
const gltfShape_30 = new GLTFShape('models/Tree_Forest_Green_03/Tree_Forest_Green_03.glb')
tree_Forest_Green_03.addComponentOrReplace(gltfShape_30)
const transform_192 = new Transform({
  position: new Vector3(36.5, 0, 58.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Green_03.addComponentOrReplace(transform_192)
engine.addEntity(tree_Forest_Green_03)

const tree_Forest_Green_03_2 = new Entity()
tree_Forest_Green_03_2.setParent(scene)
tree_Forest_Green_03_2.addComponentOrReplace(gltfShape_30)
const transform_193 = new Transform({
  position: new Vector3(43.5, 0, 58.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Green_03_2.addComponentOrReplace(transform_193)
engine.addEntity(tree_Forest_Green_03_2)

const tree_Forest_Green_03_3 = new Entity()
tree_Forest_Green_03_3.setParent(scene)
tree_Forest_Green_03_3.addComponentOrReplace(gltfShape_30)
const transform_194 = new Transform({
  position: new Vector3(50.5, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Green_03_3.addComponentOrReplace(transform_194)
engine.addEntity(tree_Forest_Green_03_3)

const tree_Forest_Green_03_4 = new Entity()
tree_Forest_Green_03_4.setParent(scene)
tree_Forest_Green_03_4.addComponentOrReplace(gltfShape_30)
const transform_195 = new Transform({
  position: new Vector3(58.5, 0, 58.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Green_03_4.addComponentOrReplace(transform_195)
engine.addEntity(tree_Forest_Green_03_4)

const tree_Forest_Green_03_5 = new Entity()
tree_Forest_Green_03_5.setParent(scene)
tree_Forest_Green_03_5.addComponentOrReplace(gltfShape_30)
const transform_196 = new Transform({
  position: new Vector3(69, 0, 56.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Green_03_5.addComponentOrReplace(transform_196)
engine.addEntity(tree_Forest_Green_03_5)

const tree_Forest_Green_03_6 = new Entity()
tree_Forest_Green_03_6.setParent(scene)
tree_Forest_Green_03_6.addComponentOrReplace(gltfShape_30)
const transform_197 = new Transform({
  position: new Vector3(76, 0, 57),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Green_03_6.addComponentOrReplace(transform_197)
engine.addEntity(tree_Forest_Green_03_6)

const tree_Forest_Green_03_7 = new Entity()
tree_Forest_Green_03_7.setParent(scene)
tree_Forest_Green_03_7.addComponentOrReplace(gltfShape_30)
const transform_198 = new Transform({
  position: new Vector3(85.5, 0, 54),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Green_03_7.addComponentOrReplace(transform_198)
engine.addEntity(tree_Forest_Green_03_7)

const tree_Forest_Green_03_8 = new Entity()
tree_Forest_Green_03_8.setParent(scene)
tree_Forest_Green_03_8.addComponentOrReplace(gltfShape_30)
const transform_199 = new Transform({
  position: new Vector3(99, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Green_03_8.addComponentOrReplace(transform_199)
engine.addEntity(tree_Forest_Green_03_8)

const tree_Forest_Green_03_9 = new Entity()
tree_Forest_Green_03_9.setParent(scene)
tree_Forest_Green_03_9.addComponentOrReplace(gltfShape_30)
const transform_200 = new Transform({
  position: new Vector3(99, 0, 57),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Green_03_9.addComponentOrReplace(transform_200)
engine.addEntity(tree_Forest_Green_03_9)

const tree_Forest_Green_03_10 = new Entity()
tree_Forest_Green_03_10.setParent(scene)
tree_Forest_Green_03_10.addComponentOrReplace(gltfShape_30)
const transform_201 = new Transform({
  position: new Vector3(107.5, 0, 55.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Green_03_10.addComponentOrReplace(transform_201)
engine.addEntity(tree_Forest_Green_03_10)

const tree_Forest_Green_03_11 = new Entity()
tree_Forest_Green_03_11.setParent(scene)
tree_Forest_Green_03_11.addComponentOrReplace(gltfShape_30)
const transform_202 = new Transform({
  position: new Vector3(114, 0, 58),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Green_03_11.addComponentOrReplace(transform_202)
engine.addEntity(tree_Forest_Green_03_11)

const tree_Forest_Green_03_12 = new Entity()
tree_Forest_Green_03_12.setParent(scene)
tree_Forest_Green_03_12.addComponentOrReplace(gltfShape_30)
const transform_203 = new Transform({
  position: new Vector3(116.5, 0, 54.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Green_03_12.addComponentOrReplace(transform_203)
engine.addEntity(tree_Forest_Green_03_12)

const tree_Forest_Green_02_2 = new Entity()
tree_Forest_Green_02_2.setParent(scene)
tree_Forest_Green_02_2.addComponentOrReplace(gltfShape_9)
const transform_204 = new Transform({
  position: new Vector3(56.5, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Green_02_2.addComponentOrReplace(transform_204)
engine.addEntity(tree_Forest_Green_02_2)

const tree_Forest_Green_02_3 = new Entity()
tree_Forest_Green_02_3.setParent(scene)
tree_Forest_Green_02_3.addComponentOrReplace(gltfShape_9)
const transform_205 = new Transform({
  position: new Vector3(64, 0, 6.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Green_02_3.addComponentOrReplace(transform_205)
engine.addEntity(tree_Forest_Green_02_3)

const tree_Forest_Green_02_4 = new Entity()
tree_Forest_Green_02_4.setParent(scene)
tree_Forest_Green_02_4.addComponentOrReplace(gltfShape_9)
const transform_206 = new Transform({
  position: new Vector3(69, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Green_02_4.addComponentOrReplace(transform_206)
engine.addEntity(tree_Forest_Green_02_4)

const tree_Forest_Green_02_5 = new Entity()
tree_Forest_Green_02_5.setParent(scene)
tree_Forest_Green_02_5.addComponentOrReplace(gltfShape_9)
const transform_207 = new Transform({
  position: new Vector3(78, 0, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Green_02_5.addComponentOrReplace(transform_207)
engine.addEntity(tree_Forest_Green_02_5)

const tree_Forest_Green_02_6 = new Entity()
tree_Forest_Green_02_6.setParent(scene)
tree_Forest_Green_02_6.addComponentOrReplace(gltfShape_9)
const transform_208 = new Transform({
  position: new Vector3(83.5, 0, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Green_02_6.addComponentOrReplace(transform_208)
engine.addEntity(tree_Forest_Green_02_6)

const tree_Forest_Turquoise_01_2 = new Entity()
tree_Forest_Turquoise_01_2.setParent(scene)
tree_Forest_Turquoise_01_2.addComponentOrReplace(gltfShape_10)
const transform_209 = new Transform({
  position: new Vector3(48, 0, 60.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Turquoise_01_2.addComponentOrReplace(transform_209)
engine.addEntity(tree_Forest_Turquoise_01_2)

const tree_Forest_Turquoise_01_3 = new Entity()
tree_Forest_Turquoise_01_3.setParent(scene)
tree_Forest_Turquoise_01_3.addComponentOrReplace(gltfShape_10)
const transform_210 = new Transform({
  position: new Vector3(48, 0, 60.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Turquoise_01_3.addComponentOrReplace(transform_210)
engine.addEntity(tree_Forest_Turquoise_01_3)

const tree_Forest_Turquoise_01_4 = new Entity()
tree_Forest_Turquoise_01_4.setParent(scene)
tree_Forest_Turquoise_01_4.addComponentOrReplace(gltfShape_10)
const transform_211 = new Transform({
  position: new Vector3(58, 0, 57),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Turquoise_01_4.addComponentOrReplace(transform_211)
engine.addEntity(tree_Forest_Turquoise_01_4)

const tree_Forest_Turquoise_01_5 = new Entity()
tree_Forest_Turquoise_01_5.setParent(scene)
tree_Forest_Turquoise_01_5.addComponentOrReplace(gltfShape_10)
const transform_212 = new Transform({
  position: new Vector3(62.5, 0, 59),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Turquoise_01_5.addComponentOrReplace(transform_212)
engine.addEntity(tree_Forest_Turquoise_01_5)

const tree_Forest_Turquoise_01_6 = new Entity()
tree_Forest_Turquoise_01_6.setParent(scene)
tree_Forest_Turquoise_01_6.addComponentOrReplace(gltfShape_10)
const transform_213 = new Transform({
  position: new Vector3(59.5, 0, 60),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Turquoise_01_6.addComponentOrReplace(transform_213)
engine.addEntity(tree_Forest_Turquoise_01_6)

const tree_Forest_Turquoise_01_7 = new Entity()
tree_Forest_Turquoise_01_7.setParent(scene)
tree_Forest_Turquoise_01_7.addComponentOrReplace(gltfShape_10)
const transform_214 = new Transform({
  position: new Vector3(66.5, 0, 59),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Turquoise_01_7.addComponentOrReplace(transform_214)
engine.addEntity(tree_Forest_Turquoise_01_7)

const tree_Forest_Turquoise_01_8 = new Entity()
tree_Forest_Turquoise_01_8.setParent(scene)
tree_Forest_Turquoise_01_8.addComponentOrReplace(gltfShape_10)
const transform_215 = new Transform({
  position: new Vector3(72.5, 0, 56.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Turquoise_01_8.addComponentOrReplace(transform_215)
engine.addEntity(tree_Forest_Turquoise_01_8)

const tree_Forest_Turquoise_01_9 = new Entity()
tree_Forest_Turquoise_01_9.setParent(scene)
tree_Forest_Turquoise_01_9.addComponentOrReplace(gltfShape_10)
const transform_216 = new Transform({
  position: new Vector3(77, 0, 56.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Turquoise_01_9.addComponentOrReplace(transform_216)
engine.addEntity(tree_Forest_Turquoise_01_9)

const tree_Forest_Turquoise_01_10 = new Entity()
tree_Forest_Turquoise_01_10.setParent(scene)
tree_Forest_Turquoise_01_10.addComponentOrReplace(gltfShape_10)
const transform_217 = new Transform({
  position: new Vector3(83, 0, 56.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Turquoise_01_10.addComponentOrReplace(transform_217)
engine.addEntity(tree_Forest_Turquoise_01_10)

const treeRoundPine_03 = new Entity()
treeRoundPine_03.setParent(scene)
const gltfShape_31 = new GLTFShape('models/TreeRoundPine_03/TreeRoundPine_03.glb')
treeRoundPine_03.addComponentOrReplace(gltfShape_31)
const transform_218 = new Transform({
  position: new Vector3(47.5, 0, 56.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treeRoundPine_03.addComponentOrReplace(transform_218)
engine.addEntity(treeRoundPine_03)

const treeRoundPine_03_2 = new Entity()
treeRoundPine_03_2.setParent(scene)
treeRoundPine_03_2.addComponentOrReplace(gltfShape_31)
const transform_219 = new Transform({
  position: new Vector3(63.5, 0, 56.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treeRoundPine_03_2.addComponentOrReplace(transform_219)
engine.addEntity(treeRoundPine_03_2)

const treeRoundPine_03_3 = new Entity()
treeRoundPine_03_3.setParent(scene)
treeRoundPine_03_3.addComponentOrReplace(gltfShape_31)
const transform_220 = new Transform({
  position: new Vector3(26, 0, 56.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treeRoundPine_03_3.addComponentOrReplace(transform_220)
engine.addEntity(treeRoundPine_03_3)

const treeRoundPine_03_4 = new Entity()
treeRoundPine_03_4.setParent(scene)
treeRoundPine_03_4.addComponentOrReplace(gltfShape_31)
const transform_221 = new Transform({
  position: new Vector3(40.5, 0, 59),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treeRoundPine_03_4.addComponentOrReplace(transform_221)
engine.addEntity(treeRoundPine_03_4)

const treeRoundPine_03_5 = new Entity()
treeRoundPine_03_5.setParent(scene)
treeRoundPine_03_5.addComponentOrReplace(gltfShape_31)
const transform_222 = new Transform({
  position: new Vector3(57, 0, 59),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treeRoundPine_03_5.addComponentOrReplace(transform_222)
engine.addEntity(treeRoundPine_03_5)

const treeRoundPine_03_6 = new Entity()
treeRoundPine_03_6.setParent(scene)
treeRoundPine_03_6.addComponentOrReplace(gltfShape_31)
const transform_223 = new Transform({
  position: new Vector3(81.5, 0, 59),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treeRoundPine_03_6.addComponentOrReplace(transform_223)
engine.addEntity(treeRoundPine_03_6)

const tree_01_2 = new Entity()
tree_01_2.setParent(scene)
tree_01_2.addComponentOrReplace(gltfShape_7)
const transform_224 = new Transform({
  position: new Vector3(54.5, 0, 58.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_01_2.addComponentOrReplace(transform_224)
engine.addEntity(tree_01_2)

const tree_01_3 = new Entity()
tree_01_3.setParent(scene)
tree_01_3.addComponentOrReplace(gltfShape_7)
const transform_225 = new Transform({
  position: new Vector3(19.5, 0, 58.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_01_3.addComponentOrReplace(transform_225)
engine.addEntity(tree_01_3)

const tree_01_4 = new Entity()
tree_01_4.setParent(scene)
tree_01_4.addComponentOrReplace(gltfShape_7)
const transform_226 = new Transform({
  position: new Vector3(75, 0, 58.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_01_4.addComponentOrReplace(transform_226)
engine.addEntity(tree_01_4)

const tree_01_5 = new Entity()
tree_01_5.setParent(scene)
tree_01_5.addComponentOrReplace(gltfShape_7)
const transform_227 = new Transform({
  position: new Vector3(98.5, 0, 58.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_01_5.addComponentOrReplace(transform_227)
engine.addEntity(tree_01_5)

const tree_01_6 = new Entity()
tree_01_6.setParent(scene)
tree_01_6.addComponentOrReplace(gltfShape_7)
const transform_228 = new Transform({
  position: new Vector3(98.5, 0, 54.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_01_6.addComponentOrReplace(transform_228)
engine.addEntity(tree_01_6)

const tree_01_7 = new Entity()
tree_01_7.setParent(scene)
tree_01_7.addComponentOrReplace(gltfShape_7)
const transform_229 = new Transform({
  position: new Vector3(112, 0, 54.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_01_7.addComponentOrReplace(transform_229)
engine.addEntity(tree_01_7)

const tree_01_8 = new Entity()
tree_01_8.setParent(scene)
tree_01_8.addComponentOrReplace(gltfShape_7)
const transform_230 = new Transform({
  position: new Vector3(112, 0, 59.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_01_8.addComponentOrReplace(transform_230)
engine.addEntity(tree_01_8)

const tree_01_9 = new Entity()
tree_01_9.setParent(scene)
tree_01_9.addComponentOrReplace(gltfShape_7)
const transform_231 = new Transform({
  position: new Vector3(118.5, 0, 59.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_01_9.addComponentOrReplace(transform_231)
engine.addEntity(tree_01_9)

const tree_Forest_Blue_03 = new Entity()
tree_Forest_Blue_03.setParent(scene)
const gltfShape_32 = new GLTFShape('models/Tree_Forest_Blue_03/Tree_Forest_Blue_03.glb')
tree_Forest_Blue_03.addComponentOrReplace(gltfShape_32)
const transform_232 = new Transform({
  position: new Vector3(99, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Blue_03.addComponentOrReplace(transform_232)
engine.addEntity(tree_Forest_Blue_03)

const tree_Forest_Pink_01 = new Entity()
tree_Forest_Pink_01.setParent(scene)
const gltfShape_33 = new GLTFShape('models/Tree_Forest_Pink_01/Tree_Forest_Pink_01.glb')
tree_Forest_Pink_01.addComponentOrReplace(gltfShape_33)
const transform_233 = new Transform({
  position: new Vector3(67, 0, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Pink_01.addComponentOrReplace(transform_233)
engine.addEntity(tree_Forest_Pink_01)

const tree_Forest_Pink_01_2 = new Entity()
tree_Forest_Pink_01_2.setParent(scene)
tree_Forest_Pink_01_2.addComponentOrReplace(gltfShape_33)
const transform_234 = new Transform({
  position: new Vector3(81, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Pink_01_2.addComponentOrReplace(transform_234)
engine.addEntity(tree_Forest_Pink_01_2)

const tree_Forest_Pink_01_3 = new Entity()
tree_Forest_Pink_01_3.setParent(scene)
tree_Forest_Pink_01_3.addComponentOrReplace(gltfShape_33)
const transform_235 = new Transform({
  position: new Vector3(96, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Pink_01_3.addComponentOrReplace(transform_235)
engine.addEntity(tree_Forest_Pink_01_3)

const tree_Forest_Pink_01_4 = new Entity()
tree_Forest_Pink_01_4.setParent(scene)
tree_Forest_Pink_01_4.addComponentOrReplace(gltfShape_33)
const transform_236 = new Transform({
  position: new Vector3(109.5, 0, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Pink_01_4.addComponentOrReplace(transform_236)
engine.addEntity(tree_Forest_Pink_01_4)

const tree_Forest_Blue_03_2 = new Entity()
tree_Forest_Blue_03_2.setParent(scene)
tree_Forest_Blue_03_2.addComponentOrReplace(gltfShape_32)
const transform_237 = new Transform({
  position: new Vector3(74, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Blue_03_2.addComponentOrReplace(transform_237)
engine.addEntity(tree_Forest_Blue_03_2)

const tree_Forest_Blue_03_3 = new Entity()
tree_Forest_Blue_03_3.setParent(scene)
tree_Forest_Blue_03_3.addComponentOrReplace(gltfShape_32)
const transform_238 = new Transform({
  position: new Vector3(107, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Blue_03_3.addComponentOrReplace(transform_238)
engine.addEntity(tree_Forest_Blue_03_3)

const tree_Forest_Blue_03_4 = new Entity()
tree_Forest_Blue_03_4.setParent(scene)
tree_Forest_Blue_03_4.addComponentOrReplace(gltfShape_32)
const transform_239 = new Transform({
  position: new Vector3(45.5, 0, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_Forest_Blue_03_4.addComponentOrReplace(transform_239)
engine.addEntity(tree_Forest_Blue_03_4)

const fence_Straight_01 = new Entity()
fence_Straight_01.setParent(scene)
const gltfShape_34 = new GLTFShape('models/Fence_Straight_01/Fence_Straight_01.glb')
fence_Straight_01.addComponentOrReplace(gltfShape_34)
const transform_240 = new Transform({
  position: new Vector3(66.5, 0, 25.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5773502691896257, 1.5773502691896257, 1.5773502691896257)
})
fence_Straight_01.addComponentOrReplace(transform_240)
engine.addEntity(fence_Straight_01)

const fence_Straight_01_2 = new Entity()
fence_Straight_01_2.setParent(scene)
fence_Straight_01_2.addComponentOrReplace(gltfShape_34)
const transform_241 = new Transform({
  position: new Vector3(63.5, 0, 25.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5773502691896257, 1.5773502691896257, 1.5773502691896257)
})
fence_Straight_01_2.addComponentOrReplace(transform_241)
engine.addEntity(fence_Straight_01_2)

const fence_Straight_01_3 = new Entity()
fence_Straight_01_3.setParent(scene)
fence_Straight_01_3.addComponentOrReplace(gltfShape_34)
const transform_242 = new Transform({
  position: new Vector3(60.5, 0, 25.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5773502691896257, 1.5773502691896257, 1.5773502691896257)
})
fence_Straight_01_3.addComponentOrReplace(transform_242)
engine.addEntity(fence_Straight_01_3)

const fence_Straight_01_4 = new Entity()
fence_Straight_01_4.setParent(scene)
fence_Straight_01_4.addComponentOrReplace(gltfShape_34)
const transform_243 = new Transform({
  position: new Vector3(57.5, 0, 25.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5773502691896257, 1.5773502691896257, 1.5773502691896257)
})
fence_Straight_01_4.addComponentOrReplace(transform_243)
engine.addEntity(fence_Straight_01_4)

const fence_Straight_01_5 = new Entity()
fence_Straight_01_5.setParent(scene)
fence_Straight_01_5.addComponentOrReplace(gltfShape_34)
const transform_244 = new Transform({
  position: new Vector3(54, 0, 25.5),
  rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865476),
  scale: new Vector3(1.5773502691896257, 1.5773502691896257, 1.5773502691896257)
})
fence_Straight_01_5.addComponentOrReplace(transform_244)
engine.addEntity(fence_Straight_01_5)

const fence_Straight_01_6 = new Entity()
fence_Straight_01_6.setParent(scene)
fence_Straight_01_6.addComponentOrReplace(gltfShape_34)
const transform_245 = new Transform({
  position: new Vector3(54, 0, 28.5),
  rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865476),
  scale: new Vector3(1.5773502691896257, 1.5773502691896257, 1.5773502691896257)
})
fence_Straight_01_6.addComponentOrReplace(transform_245)
engine.addEntity(fence_Straight_01_6)

const fence_Straight_01_7 = new Entity()
fence_Straight_01_7.setParent(scene)
fence_Straight_01_7.addComponentOrReplace(gltfShape_34)
const transform_246 = new Transform({
  position: new Vector3(54, 0, 31.5),
  rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865476),
  scale: new Vector3(1.5773502691896257, 1.5773502691896257, 1.5773502691896257)
})
fence_Straight_01_7.addComponentOrReplace(transform_246)
engine.addEntity(fence_Straight_01_7)

const fence_Straight_01_8 = new Entity()
fence_Straight_01_8.setParent(scene)
fence_Straight_01_8.addComponentOrReplace(gltfShape_34)
const transform_247 = new Transform({
  position: new Vector3(54, 0, 34.5),
  rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865476),
  scale: new Vector3(1.5773502691896257, 1.5773502691896257, 1.5773502691896257)
})
fence_Straight_01_8.addComponentOrReplace(transform_247)
engine.addEntity(fence_Straight_01_8)

const fence_Straight_01_9 = new Entity()
fence_Straight_01_9.setParent(scene)
fence_Straight_01_9.addComponentOrReplace(gltfShape_34)
const transform_248 = new Transform({
  position: new Vector3(54, 0, 37.5),
  rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865476),
  scale: new Vector3(1.5773502691896257, 1.5773502691896257, 1.5773502691896257)
})
fence_Straight_01_9.addComponentOrReplace(transform_248)
engine.addEntity(fence_Straight_01_9)

const fence_Straight_01_10 = new Entity()
fence_Straight_01_10.setParent(scene)
fence_Straight_01_10.addComponentOrReplace(gltfShape_34)
const transform_249 = new Transform({
  position: new Vector3(66.5, 0, 40.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5773502691896257, 1.5773502691896257, 1.5773502691896257)
})
fence_Straight_01_10.addComponentOrReplace(transform_249)
engine.addEntity(fence_Straight_01_10)

const fence_Straight_01_11 = new Entity()
fence_Straight_01_11.setParent(scene)
fence_Straight_01_11.addComponentOrReplace(gltfShape_34)
const transform_250 = new Transform({
  position: new Vector3(63.5, 0, 40.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5773502691896257, 1.5773502691896257, 1.5773502691896257)
})
fence_Straight_01_11.addComponentOrReplace(transform_250)
engine.addEntity(fence_Straight_01_11)

const fence_Straight_01_12 = new Entity()
fence_Straight_01_12.setParent(scene)
fence_Straight_01_12.addComponentOrReplace(gltfShape_34)
const transform_251 = new Transform({
  position: new Vector3(60.5, 0, 40.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5773502691896257, 1.5773502691896257, 1.5773502691896257)
})
fence_Straight_01_12.addComponentOrReplace(transform_251)
engine.addEntity(fence_Straight_01_12)

const fence_Straight_01_13 = new Entity()
fence_Straight_01_13.setParent(scene)
fence_Straight_01_13.addComponentOrReplace(gltfShape_34)
const transform_252 = new Transform({
  position: new Vector3(57.5, 0, 40.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5773502691896257, 1.5773502691896257, 1.5773502691896257)
})
fence_Straight_01_13.addComponentOrReplace(transform_252)
engine.addEntity(fence_Straight_01_13)

const templeMoon_01 = new Entity()
templeMoon_01.setParent(scene)
const gltfShape_35 = new GLTFShape('models/TempleMoon_01/TempleMoon_01.glb')
templeMoon_01.addComponentOrReplace(gltfShape_35)
const transform_253 = new Transform({
  position: new Vector3(99, 0, 19.5),
  rotation: new Quaternion(0, 8.326672684688674e-17, 0, 1),
  scale: new Vector3(1, 1, 1)
})
templeMoon_01.addComponentOrReplace(transform_253)
engine.addEntity(templeMoon_01)

const templeMoon_01_2 = new Entity()
templeMoon_01_2.setParent(scene)
templeMoon_01_2.addComponentOrReplace(gltfShape_35)
const transform_254 = new Transform({
  position: new Vector3(99, 0, 43),
  rotation: new Quaternion(0, 1, 0, 2.636779683484747e-16),
  scale: new Vector3(1, 1, 1)
})
templeMoon_01_2.addComponentOrReplace(transform_254)
engine.addEntity(templeMoon_01_2)

const carriage_01 = new Entity()
carriage_01.setParent(scene)
const gltfShape_36 = new GLTFShape('models/Carriage_01/Carriage_01.glb')
carriage_01.addComponentOrReplace(gltfShape_36)
const transform_255 = new Transform({
  position: new Vector3(20, 0, 43),
  rotation: new Quaternion(0, -0.0980171403295606, 0, 0.9951847266721969),
  scale: new Vector3(1, 1, 1)
})
carriage_01.addComponentOrReplace(transform_255)
engine.addEntity(carriage_01)

const girlForestStatue_01 = new Entity()
girlForestStatue_01.setParent(scene)
const gltfShape_37 = new GLTFShape('models/GirlForestStatue_01/GirlForestStatue_01.glb')
girlForestStatue_01.addComponentOrReplace(gltfShape_37)
const transform_256 = new Transform({
  position: new Vector3(45.5, 0, 28.5),
  rotation: new Quaternion(0, 0.9238795325112866, 0, 0.3826834323650897),
  scale: new Vector3(1, 1, 1)
})
girlForestStatue_01.addComponentOrReplace(transform_256)
engine.addEntity(girlForestStatue_01)

const girlForestStatue_01_2 = new Entity()
girlForestStatue_01_2.setParent(scene)
girlForestStatue_01_2.addComponentOrReplace(gltfShape_37)
const transform_257 = new Transform({
  position: new Vector3(47.5, 0, 22.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
girlForestStatue_01_2.addComponentOrReplace(transform_257)
engine.addEntity(girlForestStatue_01_2)

const pedestal_01 = new Entity()
pedestal_01.setParent(scene)
const gltfShape_38 = new GLTFShape('models/Pedestal_01/Pedestal_01.glb')
pedestal_01.addComponentOrReplace(gltfShape_38)
const transform_258 = new Transform({
  position: new Vector3(38.5, 0, 22.5),
  rotation: new Quaternion(0, 0.5555702330196022, 0, 0.8314696123025452),
  scale: new Vector3(1, 1, 1)
})
pedestal_01.addComponentOrReplace(transform_258)
engine.addEntity(pedestal_01)

const archWay_01 = new Entity()
archWay_01.setParent(scene)
const gltfShape_39 = new GLTFShape('models/ArchWay_01/ArchWay_01.glb')
archWay_01.addComponentOrReplace(gltfShape_39)
const transform_259 = new Transform({
  position: new Vector3(21.5, 0, 23.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.2886751345948126, 1.2886751345948126, 1.2886751345948126)
})
archWay_01.addComponentOrReplace(transform_259)
engine.addEntity(archWay_01)

const module_Stone_Straight_Window_02 = new Entity()
module_Stone_Straight_Window_02.setParent(scene)
const gltfShape_40 = new GLTFShape('models/Module_Stone_Straight_Window_02/Module_Stone_Straight_Window_02.glb')
module_Stone_Straight_Window_02.addComponentOrReplace(gltfShape_40)
const transform_260 = new Transform({
  position: new Vector3(23.5, 0, 17.5),
  rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865477),
  scale: new Vector3(1.2886751345948129, 1.2886751345948129, 1.2886751345948129)
})
module_Stone_Straight_Window_02.addComponentOrReplace(transform_260)
engine.addEntity(module_Stone_Straight_Window_02)

const module_Stone_Straight_Window_02_2 = new Entity()
module_Stone_Straight_Window_02_2.setParent(scene)
module_Stone_Straight_Window_02_2.addComponentOrReplace(gltfShape_40)
const transform_261 = new Transform({
  position: new Vector3(23.5, 0, 12.5),
  rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865477),
  scale: new Vector3(1.2886751345948129, 1.2886751345948129, 1.2886751345948129)
})
module_Stone_Straight_Window_02_2.addComponentOrReplace(transform_261)
engine.addEntity(module_Stone_Straight_Window_02_2)

const module_Stone_Straight_Window_02_3 = new Entity()
module_Stone_Straight_Window_02_3.setParent(scene)
module_Stone_Straight_Window_02_3.addComponentOrReplace(gltfShape_40)
const transform_262 = new Transform({
  position: new Vector3(13.5, 0, 12.5),
  rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865477),
  scale: new Vector3(1.2886751345948129, 1.2886751345948129, 1.2886751345948129)
})
module_Stone_Straight_Window_02_3.addComponentOrReplace(transform_262)
engine.addEntity(module_Stone_Straight_Window_02_3)

const module_Stone_Straight_Window_02_4 = new Entity()
module_Stone_Straight_Window_02_4.setParent(scene)
module_Stone_Straight_Window_02_4.addComponentOrReplace(gltfShape_40)
const transform_263 = new Transform({
  position: new Vector3(13.5, 0, 17.5),
  rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865477),
  scale: new Vector3(1.2886751345948129, 1.2886751345948129, 1.2886751345948129)
})
module_Stone_Straight_Window_02_4.addComponentOrReplace(transform_263)
engine.addEntity(module_Stone_Straight_Window_02_4)

const module_Stone_Straight_Window_02_5 = new Entity()
module_Stone_Straight_Window_02_5.setParent(scene)
module_Stone_Straight_Window_02_5.addComponentOrReplace(gltfShape_40)
const transform_264 = new Transform({
  position: new Vector3(24, 0, 12.5),
  rotation: new Quaternion(0, 1.3877787807814457e-17, 0, 1.0000000000000002),
  scale: new Vector3(1.2886751345948129, 1.2886751345948129, 1.2886751345948129)
})
module_Stone_Straight_Window_02_5.addComponentOrReplace(transform_264)
engine.addEntity(module_Stone_Straight_Window_02_5)

const archWay_01_2 = new Entity()
archWay_01_2.setParent(scene)
archWay_01_2.addComponentOrReplace(gltfShape_39)
const transform_265 = new Transform({
  position: new Vector3(16, 0, 23.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.2886751345948126, 1.2886751345948126, 1.2886751345948126)
})
archWay_01_2.addComponentOrReplace(transform_265)
engine.addEntity(archWay_01_2)

const module_Stone_Straight_Window_02_6 = new Entity()
module_Stone_Straight_Window_02_6.setParent(scene)
module_Stone_Straight_Window_02_6.addComponentOrReplace(gltfShape_40)
const transform_266 = new Transform({
  position: new Vector3(19, 0, 12.5),
  rotation: new Quaternion(0, 1.3877787807814457e-17, 0, 1.0000000000000002),
  scale: new Vector3(1.2886751345948129, 1.2886751345948129, 1.2886751345948129)
})
module_Stone_Straight_Window_02_6.addComponentOrReplace(transform_266)
engine.addEntity(module_Stone_Straight_Window_02_6)

const pillar_Top_Stones_Big_01 = new Entity()
pillar_Top_Stones_Big_01.setParent(scene)
const gltfShape_41 = new GLTFShape('models/Pillar_Top_Stones_Big_01/Pillar_Top_Stones_Big_01.glb')
pillar_Top_Stones_Big_01.addComponentOrReplace(gltfShape_41)
const transform_267 = new Transform({
  position: new Vector3(24, 5, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pillar_Top_Stones_Big_01.addComponentOrReplace(transform_267)
engine.addEntity(pillar_Top_Stones_Big_01)

const pillar_Top_Stones_Big_01_2 = new Entity()
pillar_Top_Stones_Big_01_2.setParent(scene)
pillar_Top_Stones_Big_01_2.addComponentOrReplace(gltfShape_41)
const transform_268 = new Transform({
  position: new Vector3(18.5, 5, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pillar_Top_Stones_Big_01_2.addComponentOrReplace(transform_268)
engine.addEntity(pillar_Top_Stones_Big_01_2)

const pillar_Top_Stones_Big_01_3 = new Entity()
pillar_Top_Stones_Big_01_3.setParent(scene)
pillar_Top_Stones_Big_01_3.addComponentOrReplace(gltfShape_41)
const transform_269 = new Transform({
  position: new Vector3(21, 5, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pillar_Top_Stones_Big_01_3.addComponentOrReplace(transform_269)
engine.addEntity(pillar_Top_Stones_Big_01_3)

const pillar_Top_Stones_Big_01_4 = new Entity()
pillar_Top_Stones_Big_01_4.setParent(scene)
pillar_Top_Stones_Big_01_4.addComponentOrReplace(gltfShape_41)
const transform_270 = new Transform({
  position: new Vector3(24, 5, 18.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pillar_Top_Stones_Big_01_4.addComponentOrReplace(transform_270)
engine.addEntity(pillar_Top_Stones_Big_01_4)

const pillar_Top_Stones_Big_01_5 = new Entity()
pillar_Top_Stones_Big_01_5.setParent(scene)
pillar_Top_Stones_Big_01_5.addComponentOrReplace(gltfShape_41)
const transform_271 = new Transform({
  position: new Vector3(24, 5, 21),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pillar_Top_Stones_Big_01_5.addComponentOrReplace(transform_271)
engine.addEntity(pillar_Top_Stones_Big_01_5)

const pillar_Top_Stones_Big_01_6 = new Entity()
pillar_Top_Stones_Big_01_6.setParent(scene)
pillar_Top_Stones_Big_01_6.addComponentOrReplace(gltfShape_41)
const transform_272 = new Transform({
  position: new Vector3(24, 5, 23.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pillar_Top_Stones_Big_01_6.addComponentOrReplace(transform_272)
engine.addEntity(pillar_Top_Stones_Big_01_6)

const pillar_Top_Stones_Big_01_7 = new Entity()
pillar_Top_Stones_Big_01_7.setParent(scene)
pillar_Top_Stones_Big_01_7.addComponentOrReplace(gltfShape_41)
const transform_273 = new Transform({
  position: new Vector3(20, 5, 23.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pillar_Top_Stones_Big_01_7.addComponentOrReplace(transform_273)
engine.addEntity(pillar_Top_Stones_Big_01_7)

const pillar_Top_Stones_Big_01_8 = new Entity()
pillar_Top_Stones_Big_01_8.setParent(scene)
pillar_Top_Stones_Big_01_8.addComponentOrReplace(gltfShape_41)
const transform_274 = new Transform({
  position: new Vector3(20, 5, 21),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pillar_Top_Stones_Big_01_8.addComponentOrReplace(transform_274)
engine.addEntity(pillar_Top_Stones_Big_01_8)

const pillar_Top_Stones_Big_01_9 = new Entity()
pillar_Top_Stones_Big_01_9.setParent(scene)
pillar_Top_Stones_Big_01_9.addComponentOrReplace(gltfShape_41)
const transform_275 = new Transform({
  position: new Vector3(20, 5, 18.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pillar_Top_Stones_Big_01_9.addComponentOrReplace(transform_275)
engine.addEntity(pillar_Top_Stones_Big_01_9)

const pillar_Top_Stones_Big_01_10 = new Entity()
pillar_Top_Stones_Big_01_10.setParent(scene)
pillar_Top_Stones_Big_01_10.addComponentOrReplace(gltfShape_41)
const transform_276 = new Transform({
  position: new Vector3(18.5, 5, 18.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pillar_Top_Stones_Big_01_10.addComponentOrReplace(transform_276)
engine.addEntity(pillar_Top_Stones_Big_01_10)

const pillar_Top_Stones_Big_01_11 = new Entity()
pillar_Top_Stones_Big_01_11.setParent(scene)
pillar_Top_Stones_Big_01_11.addComponentOrReplace(gltfShape_41)
const transform_277 = new Transform({
  position: new Vector3(18.5, 5, 21),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pillar_Top_Stones_Big_01_11.addComponentOrReplace(transform_277)
engine.addEntity(pillar_Top_Stones_Big_01_11)

const pillar_Top_Stones_Big_01_12 = new Entity()
pillar_Top_Stones_Big_01_12.setParent(scene)
pillar_Top_Stones_Big_01_12.addComponentOrReplace(gltfShape_41)
const transform_278 = new Transform({
  position: new Vector3(18.5, 5, 23.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pillar_Top_Stones_Big_01_12.addComponentOrReplace(transform_278)
engine.addEntity(pillar_Top_Stones_Big_01_12)

const pillar_Magic_01 = new Entity()
pillar_Magic_01.setParent(scene)
const gltfShape_42 = new GLTFShape('models/Pillar_Magic_01/Pillar_Magic_01.glb')
pillar_Magic_01.addComponentOrReplace(gltfShape_42)
const transform_279 = new Transform({
  position: new Vector3(18.5, 0, 18),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pillar_Magic_01.addComponentOrReplace(transform_279)
engine.addEntity(pillar_Magic_01)

const statue_01 = new Entity()
statue_01.setParent(scene)
const gltfShape_43 = new GLTFShape('models/Statue_01/Statue_01.glb')
statue_01.addComponentOrReplace(gltfShape_43)
const transform_280 = new Transform({
  position: new Vector3(24.5, 0, 25),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
statue_01.addComponentOrReplace(transform_280)
engine.addEntity(statue_01)

const statue_01_2 = new Entity()
statue_01_2.setParent(scene)
statue_01_2.addComponentOrReplace(gltfShape_43)
const transform_281 = new Transform({
  position: new Vector3(13, 0, 25),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
statue_01_2.addComponentOrReplace(transform_281)
engine.addEntity(statue_01_2)

const stalagmite_04 = new Entity()
stalagmite_04.setParent(scene)
const gltfShape_44 = new GLTFShape('models/Stalagmite_04/Stalagmite_04.glb')
stalagmite_04.addComponentOrReplace(gltfShape_44)
const transform_282 = new Transform({
  position: new Vector3(97.5, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
stalagmite_04.addComponentOrReplace(transform_282)
engine.addEntity(stalagmite_04)

const vegetation_08 = new Entity()
vegetation_08.setParent(scene)
const gltfShape_45 = new GLTFShape('models/Vegetation_08/Vegetation_08.glb')
vegetation_08.addComponentOrReplace(gltfShape_45)
const transform_283 = new Transform({
  position: new Vector3(95.5, 0, 61.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08.addComponentOrReplace(transform_283)
engine.addEntity(vegetation_08)

const vegetation_09 = new Entity()
vegetation_09.setParent(scene)
const gltfShape_46 = new GLTFShape('models/Vegetation_09/Vegetation_09.glb')
vegetation_09.addComponentOrReplace(gltfShape_46)
const transform_284 = new Transform({
  position: new Vector3(82, 0, 62.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_09.addComponentOrReplace(transform_284)
engine.addEntity(vegetation_09)

const vegetation_06 = new Entity()
vegetation_06.setParent(scene)
const gltfShape_47 = new GLTFShape('models/Vegetation_06/Vegetation_06.glb')
vegetation_06.addComponentOrReplace(gltfShape_47)
const transform_285 = new Transform({
  position: new Vector3(38, 0, 59),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_06.addComponentOrReplace(transform_285)
engine.addEntity(vegetation_06)

const vegetation_02 = new Entity()
vegetation_02.setParent(scene)
const gltfShape_48 = new GLTFShape('models/Vegetation_02/Vegetation_02.glb')
vegetation_02.addComponentOrReplace(gltfShape_48)
const transform_286 = new Transform({
  position: new Vector3(51, 0, 60),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_02.addComponentOrReplace(transform_286)
engine.addEntity(vegetation_02)

const vegetation_02_2 = new Entity()
vegetation_02_2.setParent(scene)
vegetation_02_2.addComponentOrReplace(gltfShape_48)
const transform_287 = new Transform({
  position: new Vector3(45, 0, 58.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_02_2.addComponentOrReplace(transform_287)
engine.addEntity(vegetation_02_2)

const vegetation_02_3 = new Entity()
vegetation_02_3.setParent(scene)
vegetation_02_3.addComponentOrReplace(gltfShape_48)
const transform_288 = new Transform({
  position: new Vector3(46.5, 0, 59),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_02_3.addComponentOrReplace(transform_288)
engine.addEntity(vegetation_02_3)

const vegetation_02_4 = new Entity()
vegetation_02_4.setParent(scene)
vegetation_02_4.addComponentOrReplace(gltfShape_48)
const transform_289 = new Transform({
  position: new Vector3(101, 0, 60),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_02_4.addComponentOrReplace(transform_289)
engine.addEntity(vegetation_02_4)

const vegetation_02_5 = new Entity()
vegetation_02_5.setParent(scene)
vegetation_02_5.addComponentOrReplace(gltfShape_48)
const transform_290 = new Transform({
  position: new Vector3(47.5, 0, 62.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_02_5.addComponentOrReplace(transform_290)
engine.addEntity(vegetation_02_5)

const vegetation_02_6 = new Entity()
vegetation_02_6.setParent(scene)
vegetation_02_6.addComponentOrReplace(gltfShape_48)
const transform_291 = new Transform({
  position: new Vector3(49, 0, 60.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_02_6.addComponentOrReplace(transform_291)
engine.addEntity(vegetation_02_6)

const vegetation_02_7 = new Entity()
vegetation_02_7.setParent(scene)
vegetation_02_7.addComponentOrReplace(gltfShape_48)
const transform_292 = new Transform({
  position: new Vector3(51, 0, 60),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_02_7.addComponentOrReplace(transform_292)
engine.addEntity(vegetation_02_7)

const vegetation_08_2 = new Entity()
vegetation_08_2.setParent(scene)
vegetation_08_2.addComponentOrReplace(gltfShape_45)
const transform_293 = new Transform({
  position: new Vector3(98, 0, 63),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_2.addComponentOrReplace(transform_293)
engine.addEntity(vegetation_08_2)

const vegetation_08_3 = new Entity()
vegetation_08_3.setParent(scene)
vegetation_08_3.addComponentOrReplace(gltfShape_45)
const transform_294 = new Transform({
  position: new Vector3(98, 0, 63),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_3.addComponentOrReplace(transform_294)
engine.addEntity(vegetation_08_3)

const vegetation_08_4 = new Entity()
vegetation_08_4.setParent(scene)
vegetation_08_4.addComponentOrReplace(gltfShape_45)
const transform_295 = new Transform({
  position: new Vector3(93, 0, 62.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_4.addComponentOrReplace(transform_295)
engine.addEntity(vegetation_08_4)

const vegetation_08_5 = new Entity()
vegetation_08_5.setParent(scene)
vegetation_08_5.addComponentOrReplace(gltfShape_45)
const transform_296 = new Transform({
  position: new Vector3(83, 0, 63.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_5.addComponentOrReplace(transform_296)
engine.addEntity(vegetation_08_5)

const vegetation_08_6 = new Entity()
vegetation_08_6.setParent(scene)
vegetation_08_6.addComponentOrReplace(gltfShape_45)
const transform_297 = new Transform({
  position: new Vector3(90.5, 0, 60),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_6.addComponentOrReplace(transform_297)
engine.addEntity(vegetation_08_6)

const vegetation_08_7 = new Entity()
vegetation_08_7.setParent(scene)
vegetation_08_7.addComponentOrReplace(gltfShape_45)
const transform_298 = new Transform({
  position: new Vector3(89.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_7.addComponentOrReplace(transform_298)
engine.addEntity(vegetation_08_7)

const vegetation_08_8 = new Entity()
vegetation_08_8.setParent(scene)
vegetation_08_8.addComponentOrReplace(gltfShape_45)
const transform_299 = new Transform({
  position: new Vector3(87.5, 0, 60),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_8.addComponentOrReplace(transform_299)
engine.addEntity(vegetation_08_8)

const vegetation_08_9 = new Entity()
vegetation_08_9.setParent(scene)
vegetation_08_9.addComponentOrReplace(gltfShape_45)
const transform_300 = new Transform({
  position: new Vector3(86, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_9.addComponentOrReplace(transform_300)
engine.addEntity(vegetation_08_9)

const vegetation_08_10 = new Entity()
vegetation_08_10.setParent(scene)
vegetation_08_10.addComponentOrReplace(gltfShape_45)
const transform_301 = new Transform({
  position: new Vector3(83.5, 0, 61.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_10.addComponentOrReplace(transform_301)
engine.addEntity(vegetation_08_10)

const vegetation_08_11 = new Entity()
vegetation_08_11.setParent(scene)
vegetation_08_11.addComponentOrReplace(gltfShape_45)
const transform_302 = new Transform({
  position: new Vector3(68, 0, 62.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_11.addComponentOrReplace(transform_302)
engine.addEntity(vegetation_08_11)

const vegetation_08_12 = new Entity()
vegetation_08_12.setParent(scene)
vegetation_08_12.addComponentOrReplace(gltfShape_45)
const transform_303 = new Transform({
  position: new Vector3(121.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_12.addComponentOrReplace(transform_303)
engine.addEntity(vegetation_08_12)

const vegetation_08_13 = new Entity()
vegetation_08_13.setParent(scene)
vegetation_08_13.addComponentOrReplace(gltfShape_45)
const transform_304 = new Transform({
  position: new Vector3(80.5, 0, 62.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_13.addComponentOrReplace(transform_304)
engine.addEntity(vegetation_08_13)

const vegetation_08_14 = new Entity()
vegetation_08_14.setParent(scene)
vegetation_08_14.addComponentOrReplace(gltfShape_45)
const transform_305 = new Transform({
  position: new Vector3(79.5, 0, 61.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_14.addComponentOrReplace(transform_305)
engine.addEntity(vegetation_08_14)

const vegetation_08_15 = new Entity()
vegetation_08_15.setParent(scene)
vegetation_08_15.addComponentOrReplace(gltfShape_45)
const transform_306 = new Transform({
  position: new Vector3(77.5, 0, 61.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_15.addComponentOrReplace(transform_306)
engine.addEntity(vegetation_08_15)

const vegetation_08_16 = new Entity()
vegetation_08_16.setParent(scene)
vegetation_08_16.addComponentOrReplace(gltfShape_45)
const transform_307 = new Transform({
  position: new Vector3(78.5, 0, 60),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_16.addComponentOrReplace(transform_307)
engine.addEntity(vegetation_08_16)

const vegetation_08_17 = new Entity()
vegetation_08_17.setParent(scene)
vegetation_08_17.addComponentOrReplace(gltfShape_45)
const transform_308 = new Transform({
  position: new Vector3(118.5, 0, 58),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_17.addComponentOrReplace(transform_308)
engine.addEntity(vegetation_08_17)

const vegetation_08_18 = new Entity()
vegetation_08_18.setParent(scene)
vegetation_08_18.addComponentOrReplace(gltfShape_45)
const transform_309 = new Transform({
  position: new Vector3(75.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_18.addComponentOrReplace(transform_309)
engine.addEntity(vegetation_08_18)

const vegetation_08_19 = new Entity()
vegetation_08_19.setParent(scene)
vegetation_08_19.addComponentOrReplace(gltfShape_45)
const transform_310 = new Transform({
  position: new Vector3(76, 0, 60.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_19.addComponentOrReplace(transform_310)
engine.addEntity(vegetation_08_19)

const vegetation_08_20 = new Entity()
vegetation_08_20.setParent(scene)
vegetation_08_20.addComponentOrReplace(gltfShape_45)
const transform_311 = new Transform({
  position: new Vector3(73, 0, 60.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_20.addComponentOrReplace(transform_311)
engine.addEntity(vegetation_08_20)

const vegetation_08_21 = new Entity()
vegetation_08_21.setParent(scene)
vegetation_08_21.addComponentOrReplace(gltfShape_45)
const transform_312 = new Transform({
  position: new Vector3(73.5, 0, 62.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_21.addComponentOrReplace(transform_312)
engine.addEntity(vegetation_08_21)

const vegetation_08_22 = new Entity()
vegetation_08_22.setParent(scene)
vegetation_08_22.addComponentOrReplace(gltfShape_45)
const transform_313 = new Transform({
  position: new Vector3(70, 0, 61),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_22.addComponentOrReplace(transform_313)
engine.addEntity(vegetation_08_22)

const vegetation_08_23 = new Entity()
vegetation_08_23.setParent(scene)
vegetation_08_23.addComponentOrReplace(gltfShape_45)
const transform_314 = new Transform({
  position: new Vector3(71, 0, 60),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_23.addComponentOrReplace(transform_314)
engine.addEntity(vegetation_08_23)

const vegetation_08_24 = new Entity()
vegetation_08_24.setParent(scene)
vegetation_08_24.addComponentOrReplace(gltfShape_45)
const transform_315 = new Transform({
  position: new Vector3(71.5, 0, 63.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_24.addComponentOrReplace(transform_315)
engine.addEntity(vegetation_08_24)

const vegetation_08_25 = new Entity()
vegetation_08_25.setParent(scene)
vegetation_08_25.addComponentOrReplace(gltfShape_45)
const transform_316 = new Transform({
  position: new Vector3(64.5, 0, 60),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_25.addComponentOrReplace(transform_316)
engine.addEntity(vegetation_08_25)

const vegetation_08_26 = new Entity()
vegetation_08_26.setParent(scene)
vegetation_08_26.addComponentOrReplace(gltfShape_45)
const transform_317 = new Transform({
  position: new Vector3(67, 0, 61.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_26.addComponentOrReplace(transform_317)
engine.addEntity(vegetation_08_26)

const vegetation_08_27 = new Entity()
vegetation_08_27.setParent(scene)
vegetation_08_27.addComponentOrReplace(gltfShape_45)
const transform_318 = new Transform({
  position: new Vector3(68, 0, 62.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_27.addComponentOrReplace(transform_318)
engine.addEntity(vegetation_08_27)

const vegetation_08_28 = new Entity()
vegetation_08_28.setParent(scene)
vegetation_08_28.addComponentOrReplace(gltfShape_45)
const transform_319 = new Transform({
  position: new Vector3(51.5, 0, 59.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_28.addComponentOrReplace(transform_319)
engine.addEntity(vegetation_08_28)

const vegetation_08_29 = new Entity()
vegetation_08_29.setParent(scene)
vegetation_08_29.addComponentOrReplace(gltfShape_45)
const transform_320 = new Transform({
  position: new Vector3(64.5, 0, 60),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_29.addComponentOrReplace(transform_320)
engine.addEntity(vegetation_08_29)

const vegetation_08_30 = new Entity()
vegetation_08_30.setParent(scene)
vegetation_08_30.addComponentOrReplace(gltfShape_45)
const transform_321 = new Transform({
  position: new Vector3(65.5, 0, 63.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_30.addComponentOrReplace(transform_321)
engine.addEntity(vegetation_08_30)

const vegetation_08_31 = new Entity()
vegetation_08_31.setParent(scene)
vegetation_08_31.addComponentOrReplace(gltfShape_45)
const transform_322 = new Transform({
  position: new Vector3(63, 0, 62.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_31.addComponentOrReplace(transform_322)
engine.addEntity(vegetation_08_31)

const vegetation_08_32 = new Entity()
vegetation_08_32.setParent(scene)
vegetation_08_32.addComponentOrReplace(gltfShape_45)
const transform_323 = new Transform({
  position: new Vector3(61, 0, 61.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_32.addComponentOrReplace(transform_323)
engine.addEntity(vegetation_08_32)

const vegetation_08_33 = new Entity()
vegetation_08_33.setParent(scene)
vegetation_08_33.addComponentOrReplace(gltfShape_45)
const transform_324 = new Transform({
  position: new Vector3(59, 0, 63),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_33.addComponentOrReplace(transform_324)
engine.addEntity(vegetation_08_33)

const vegetation_08_34 = new Entity()
vegetation_08_34.setParent(scene)
vegetation_08_34.addComponentOrReplace(gltfShape_45)
const transform_325 = new Transform({
  position: new Vector3(57, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_34.addComponentOrReplace(transform_325)
engine.addEntity(vegetation_08_34)

const vegetation_08_35 = new Entity()
vegetation_08_35.setParent(scene)
vegetation_08_35.addComponentOrReplace(gltfShape_45)
const transform_326 = new Transform({
  position: new Vector3(54, 0, 61.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_35.addComponentOrReplace(transform_326)
engine.addEntity(vegetation_08_35)

const vegetation_08_36 = new Entity()
vegetation_08_36.setParent(scene)
vegetation_08_36.addComponentOrReplace(gltfShape_45)
const transform_327 = new Transform({
  position: new Vector3(56, 0, 63),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_36.addComponentOrReplace(transform_327)
engine.addEntity(vegetation_08_36)

const vegetation_08_37 = new Entity()
vegetation_08_37.setParent(scene)
vegetation_08_37.addComponentOrReplace(gltfShape_45)
const transform_328 = new Transform({
  position: new Vector3(53.5, 0, 63),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_37.addComponentOrReplace(transform_328)
engine.addEntity(vegetation_08_37)

const vegetation_08_38 = new Entity()
vegetation_08_38.setParent(scene)
vegetation_08_38.addComponentOrReplace(gltfShape_45)
const transform_329 = new Transform({
  position: new Vector3(32, 0, 56.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_38.addComponentOrReplace(transform_329)
engine.addEntity(vegetation_08_38)

const vegetation_08_39 = new Entity()
vegetation_08_39.setParent(scene)
vegetation_08_39.addComponentOrReplace(gltfShape_45)
const transform_330 = new Transform({
  position: new Vector3(52, 0, 58),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_39.addComponentOrReplace(transform_330)
engine.addEntity(vegetation_08_39)

const vegetation_08_40 = new Entity()
vegetation_08_40.setParent(scene)
vegetation_08_40.addComponentOrReplace(gltfShape_45)
const transform_331 = new Transform({
  position: new Vector3(52, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_40.addComponentOrReplace(transform_331)
engine.addEntity(vegetation_08_40)

const vegetation_08_41 = new Entity()
vegetation_08_41.setParent(scene)
vegetation_08_41.addComponentOrReplace(gltfShape_45)
const transform_332 = new Transform({
  position: new Vector3(121, 0, 54.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_41.addComponentOrReplace(transform_332)
engine.addEntity(vegetation_08_41)

const vegetation_08_42 = new Entity()
vegetation_08_42.setParent(scene)
vegetation_08_42.addComponentOrReplace(gltfShape_45)
const transform_333 = new Transform({
  position: new Vector3(49, 0, 61.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_42.addComponentOrReplace(transform_333)
engine.addEntity(vegetation_08_42)

const vegetation_08_43 = new Entity()
vegetation_08_43.setParent(scene)
vegetation_08_43.addComponentOrReplace(gltfShape_45)
const transform_334 = new Transform({
  position: new Vector3(50.5, 0, 63.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_43.addComponentOrReplace(transform_334)
engine.addEntity(vegetation_08_43)

const vegetation_08_44 = new Entity()
vegetation_08_44.setParent(scene)
vegetation_08_44.addComponentOrReplace(gltfShape_45)
const transform_335 = new Transform({
  position: new Vector3(45.5, 0, 61.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_44.addComponentOrReplace(transform_335)
engine.addEntity(vegetation_08_44)

const vegetation_08_45 = new Entity()
vegetation_08_45.setParent(scene)
vegetation_08_45.addComponentOrReplace(gltfShape_45)
const transform_336 = new Transform({
  position: new Vector3(46.5, 0, 63.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_45.addComponentOrReplace(transform_336)
engine.addEntity(vegetation_08_45)

const vegetation_08_46 = new Entity()
vegetation_08_46.setParent(scene)
vegetation_08_46.addComponentOrReplace(gltfShape_45)
const transform_337 = new Transform({
  position: new Vector3(43, 0, 61),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_46.addComponentOrReplace(transform_337)
engine.addEntity(vegetation_08_46)

const vegetation_08_47 = new Entity()
vegetation_08_47.setParent(scene)
vegetation_08_47.addComponentOrReplace(gltfShape_45)
const transform_338 = new Transform({
  position: new Vector3(43, 0, 61),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_47.addComponentOrReplace(transform_338)
engine.addEntity(vegetation_08_47)

const vegetation_08_48 = new Entity()
vegetation_08_48.setParent(scene)
vegetation_08_48.addComponentOrReplace(gltfShape_45)
const transform_339 = new Transform({
  position: new Vector3(43, 0, 61),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_48.addComponentOrReplace(transform_339)
engine.addEntity(vegetation_08_48)

const vegetation_08_49 = new Entity()
vegetation_08_49.setParent(scene)
vegetation_08_49.addComponentOrReplace(gltfShape_45)
const transform_340 = new Transform({
  position: new Vector3(44.5, 0, 63),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_49.addComponentOrReplace(transform_340)
engine.addEntity(vegetation_08_49)

const vegetation_08_50 = new Entity()
vegetation_08_50.setParent(scene)
vegetation_08_50.addComponentOrReplace(gltfShape_45)
const transform_341 = new Transform({
  position: new Vector3(41, 0, 60.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_50.addComponentOrReplace(transform_341)
engine.addEntity(vegetation_08_50)

const vegetation_08_51 = new Entity()
vegetation_08_51.setParent(scene)
vegetation_08_51.addComponentOrReplace(gltfShape_45)
const transform_342 = new Transform({
  position: new Vector3(41, 0, 60.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_51.addComponentOrReplace(transform_342)
engine.addEntity(vegetation_08_51)

const vegetation_08_52 = new Entity()
vegetation_08_52.setParent(scene)
vegetation_08_52.addComponentOrReplace(gltfShape_45)
const transform_343 = new Transform({
  position: new Vector3(40.5, 0, 63),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_52.addComponentOrReplace(transform_343)
engine.addEntity(vegetation_08_52)

const vegetation_08_53 = new Entity()
vegetation_08_53.setParent(scene)
vegetation_08_53.addComponentOrReplace(gltfShape_45)
const transform_344 = new Transform({
  position: new Vector3(37, 0, 63),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_53.addComponentOrReplace(transform_344)
engine.addEntity(vegetation_08_53)

const vegetation_08_54 = new Entity()
vegetation_08_54.setParent(scene)
vegetation_08_54.addComponentOrReplace(gltfShape_45)
const transform_345 = new Transform({
  position: new Vector3(34.5, 0, 62.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_54.addComponentOrReplace(transform_345)
engine.addEntity(vegetation_08_54)

const vegetation_02_8 = new Entity()
vegetation_02_8.setParent(scene)
vegetation_02_8.addComponentOrReplace(gltfShape_48)
const transform_346 = new Transform({
  position: new Vector3(86.5, 0, 63),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_02_8.addComponentOrReplace(transform_346)
engine.addEntity(vegetation_02_8)

const vegetation_02_9 = new Entity()
vegetation_02_9.setParent(scene)
vegetation_02_9.addComponentOrReplace(gltfShape_48)
const transform_347 = new Transform({
  position: new Vector3(94.5, 0, 62),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_02_9.addComponentOrReplace(transform_347)
engine.addEntity(vegetation_02_9)

const vegetation_02_10 = new Entity()
vegetation_02_10.setParent(scene)
vegetation_02_10.addComponentOrReplace(gltfShape_48)
const transform_348 = new Transform({
  position: new Vector3(97, 0, 60.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_02_10.addComponentOrReplace(transform_348)
engine.addEntity(vegetation_02_10)

const vegetation_02_11 = new Entity()
vegetation_02_11.setParent(scene)
vegetation_02_11.addComponentOrReplace(gltfShape_48)
const transform_349 = new Transform({
  position: new Vector3(100, 0, 61.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_02_11.addComponentOrReplace(transform_349)
engine.addEntity(vegetation_02_11)

const plant_01 = new Entity()
plant_01.setParent(scene)
const gltfShape_49 = new GLTFShape('models/Plant_01/Plant_01.glb')
plant_01.addComponentOrReplace(gltfShape_49)
const transform_350 = new Transform({
  position: new Vector3(64, 0, 62.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plant_01.addComponentOrReplace(transform_350)
engine.addEntity(plant_01)

const plant_03 = new Entity()
plant_03.setParent(scene)
const gltfShape_50 = new GLTFShape('models/Plant_03/Plant_03.glb')
plant_03.addComponentOrReplace(gltfShape_50)
const transform_351 = new Transform({
  position: new Vector3(65, 0, 58),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plant_03.addComponentOrReplace(transform_351)
engine.addEntity(plant_03)

const mushrooms_02 = new Entity()
mushrooms_02.setParent(scene)
const gltfShape_51 = new GLTFShape('models/Mushrooms_02/Mushrooms_02.glb')
mushrooms_02.addComponentOrReplace(gltfShape_51)
const transform_352 = new Transform({
  position: new Vector3(50, 0, 61.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
mushrooms_02.addComponentOrReplace(transform_352)
engine.addEntity(mushrooms_02)

const rock_01 = new Entity()
rock_01.setParent(scene)
const gltfShape_52 = new GLTFShape('models/Rock_01/Rock_01.glb')
rock_01.addComponentOrReplace(gltfShape_52)
const transform_353 = new Transform({
  position: new Vector3(70, 0, 60.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rock_01.addComponentOrReplace(transform_353)
engine.addEntity(rock_01)

const grassPatchLarge_04 = new Entity()
grassPatchLarge_04.setParent(scene)
const gltfShape_53 = new GLTFShape('models/GrassPatchLarge_04/GrassPatchLarge_04.glb')
grassPatchLarge_04.addComponentOrReplace(gltfShape_53)
const transform_354 = new Transform({
  position: new Vector3(64.5, 0, 60),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassPatchLarge_04.addComponentOrReplace(transform_354)
engine.addEntity(grassPatchLarge_04)

const bush_Fantasy_01 = new Entity()
bush_Fantasy_01.setParent(scene)
const gltfShape_54 = new GLTFShape('models/Bush_Fantasy_01/Bush_Fantasy_01.glb')
bush_Fantasy_01.addComponentOrReplace(gltfShape_54)
const transform_355 = new Transform({
  position: new Vector3(84, 0, 59),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bush_Fantasy_01.addComponentOrReplace(transform_355)
engine.addEntity(bush_Fantasy_01)

const log_Small_01 = new Entity()
log_Small_01.setParent(scene)
const gltfShape_55 = new GLTFShape('models/Log_Small_01/Log_Small_01.glb')
log_Small_01.addComponentOrReplace(gltfShape_55)
const transform_356 = new Transform({
  position: new Vector3(62.5, 0, 57.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
log_Small_01.addComponentOrReplace(transform_356)
engine.addEntity(log_Small_01)

const log_Medium_01 = new Entity()
log_Medium_01.setParent(scene)
const gltfShape_56 = new GLTFShape('models/Log_Medium_01/Log_Medium_01.glb')
log_Medium_01.addComponentOrReplace(gltfShape_56)
const transform_357 = new Transform({
  position: new Vector3(85.5, 0, 57),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
log_Medium_01.addComponentOrReplace(transform_357)
engine.addEntity(log_Medium_01)

const log_Medium_01_2 = new Entity()
log_Medium_01_2.setParent(scene)
log_Medium_01_2.addComponentOrReplace(gltfShape_56)
const transform_358 = new Transform({
  position: new Vector3(92.5, 0, 60),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
log_Medium_01_2.addComponentOrReplace(transform_358)
engine.addEntity(log_Medium_01_2)

const mushrooms_04 = new Entity()
mushrooms_04.setParent(scene)
const gltfShape_57 = new GLTFShape('models/Mushrooms_04/Mushrooms_04.glb')
mushrooms_04.addComponentOrReplace(gltfShape_57)
const transform_359 = new Transform({
  position: new Vector3(99.5, 0, 4.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
mushrooms_04.addComponentOrReplace(transform_359)
engine.addEntity(mushrooms_04)

const mushrooms_05 = new Entity()
mushrooms_05.setParent(scene)
const gltfShape_58 = new GLTFShape('models/Mushrooms_05/Mushrooms_05.glb')
mushrooms_05.addComponentOrReplace(gltfShape_58)
const transform_360 = new Transform({
  position: new Vector3(93, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
mushrooms_05.addComponentOrReplace(transform_360)
engine.addEntity(mushrooms_05)

const mushrooms_03 = new Entity()
mushrooms_03.setParent(scene)
const gltfShape_59 = new GLTFShape('models/Mushrooms_03/Mushrooms_03.glb')
mushrooms_03.addComponentOrReplace(gltfShape_59)
const transform_361 = new Transform({
  position: new Vector3(87.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
mushrooms_03.addComponentOrReplace(transform_361)
engine.addEntity(mushrooms_03)

const pond_Stone_01 = new Entity()
pond_Stone_01.setParent(scene)
const gltfShape_60 = new GLTFShape('models/Pond_Stone_01/Pond_Stone_01.glb')
pond_Stone_01.addComponentOrReplace(gltfShape_60)
const transform_362 = new Transform({
  position: new Vector3(29.5, 0, 55.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.8660254037844386, 1.8660254037844386, 1.8660254037844386)
})
pond_Stone_01.addComponentOrReplace(transform_362)
engine.addEntity(pond_Stone_01)

const log_Medium_01_3 = new Entity()
log_Medium_01_3.setParent(scene)
log_Medium_01_3.addComponentOrReplace(gltfShape_56)
const transform_363 = new Transform({
  position: new Vector3(72.5, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
log_Medium_01_3.addComponentOrReplace(transform_363)
engine.addEntity(log_Medium_01_3)

const log_Medium_01_4 = new Entity()
log_Medium_01_4.setParent(scene)
log_Medium_01_4.addComponentOrReplace(gltfShape_56)
const transform_364 = new Transform({
  position: new Vector3(69.5, 0, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
log_Medium_01_4.addComponentOrReplace(transform_364)
engine.addEntity(log_Medium_01_4)

const plant_02 = new Entity()
plant_02.setParent(scene)
const gltfShape_61 = new GLTFShape('models/Plant_02/Plant_02.glb')
plant_02.addComponentOrReplace(gltfShape_61)
const transform_365 = new Transform({
  position: new Vector3(110.5, 0, 3.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plant_02.addComponentOrReplace(transform_365)
engine.addEntity(plant_02)

const plant_01_2 = new Entity()
plant_01_2.setParent(scene)
plant_01_2.addComponentOrReplace(gltfShape_49)
const transform_366 = new Transform({
  position: new Vector3(90.5, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plant_01_2.addComponentOrReplace(transform_366)
engine.addEntity(plant_01_2)

const plant_04 = new Entity()
plant_04.setParent(scene)
const gltfShape_62 = new GLTFShape('models/Plant_04/Plant_04.glb')
plant_04.addComponentOrReplace(gltfShape_62)
const transform_367 = new Transform({
  position: new Vector3(45.5, 0, 9.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plant_04.addComponentOrReplace(transform_367)
engine.addEntity(plant_04)

const mushrooms_02_2 = new Entity()
mushrooms_02_2.setParent(scene)
mushrooms_02_2.addComponentOrReplace(gltfShape_51)
const transform_368 = new Transform({
  position: new Vector3(72, 0, 3.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
mushrooms_02_2.addComponentOrReplace(transform_368)
engine.addEntity(mushrooms_02_2)

const plant_04_2 = new Entity()
plant_04_2.setParent(scene)
plant_04_2.addComponentOrReplace(gltfShape_62)
const transform_369 = new Transform({
  position: new Vector3(60.5, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plant_04_2.addComponentOrReplace(transform_369)
engine.addEntity(plant_04_2)

const plant_03_2 = new Entity()
plant_03_2.setParent(scene)
plant_03_2.addComponentOrReplace(gltfShape_50)
const transform_370 = new Transform({
  position: new Vector3(104, 0, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plant_03_2.addComponentOrReplace(transform_370)
engine.addEntity(plant_03_2)

const plant_01_3 = new Entity()
plant_01_3.setParent(scene)
plant_01_3.addComponentOrReplace(gltfShape_49)
const transform_371 = new Transform({
  position: new Vector3(86, 0, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plant_01_3.addComponentOrReplace(transform_371)
engine.addEntity(plant_01_3)

const vegetation_10 = new Entity()
vegetation_10.setParent(scene)
const gltfShape_63 = new GLTFShape('models/Vegetation_10/Vegetation_10.glb')
vegetation_10.addComponentOrReplace(gltfShape_63)
const transform_372 = new Transform({
  position: new Vector3(90.5, 0, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_10.addComponentOrReplace(transform_372)
engine.addEntity(vegetation_10)

const bush_Fantasy_03 = new Entity()
bush_Fantasy_03.setParent(scene)
const gltfShape_64 = new GLTFShape('models/Bush_Fantasy_03/Bush_Fantasy_03.glb')
bush_Fantasy_03.addComponentOrReplace(gltfShape_64)
const transform_373 = new Transform({
  position: new Vector3(113, 0, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bush_Fantasy_03.addComponentOrReplace(transform_373)
engine.addEntity(bush_Fantasy_03)

const bush_Fantasy_04 = new Entity()
bush_Fantasy_04.setParent(scene)
const gltfShape_65 = new GLTFShape('models/Bush_Fantasy_04/Bush_Fantasy_04.glb')
bush_Fantasy_04.addComponentOrReplace(gltfShape_65)
const transform_374 = new Transform({
  position: new Vector3(93, 0, 9.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bush_Fantasy_04.addComponentOrReplace(transform_374)
engine.addEntity(bush_Fantasy_04)

const log_Medium_01_5 = new Entity()
log_Medium_01_5.setParent(scene)
log_Medium_01_5.addComponentOrReplace(gltfShape_56)
const transform_375 = new Transform({
  position: new Vector3(80.5, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
log_Medium_01_5.addComponentOrReplace(transform_375)
engine.addEntity(log_Medium_01_5)

const mushrooms_05_2 = new Entity()
mushrooms_05_2.setParent(scene)
mushrooms_05_2.addComponentOrReplace(gltfShape_58)
const transform_376 = new Transform({
  position: new Vector3(102.5, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
mushrooms_05_2.addComponentOrReplace(transform_376)
engine.addEntity(mushrooms_05_2)

const mushrooms_04_2 = new Entity()
mushrooms_04_2.setParent(scene)
mushrooms_04_2.addComponentOrReplace(gltfShape_57)
const transform_377 = new Transform({
  position: new Vector3(84, 0, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
mushrooms_04_2.addComponentOrReplace(transform_377)
engine.addEntity(mushrooms_04_2)

const mushrooms_03_2 = new Entity()
mushrooms_03_2.setParent(scene)
mushrooms_03_2.addComponentOrReplace(gltfShape_59)
const transform_378 = new Transform({
  position: new Vector3(116, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
mushrooms_03_2.addComponentOrReplace(transform_378)
engine.addEntity(mushrooms_03_2)

const rock_05 = new Entity()
rock_05.setParent(scene)
const gltfShape_66 = new GLTFShape('models/Rock_05/Rock_05.glb')
rock_05.addComponentOrReplace(gltfShape_66)
const transform_379 = new Transform({
  position: new Vector3(47, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rock_05.addComponentOrReplace(transform_379)
engine.addEntity(rock_05)

const vegetation_09_2 = new Entity()
vegetation_09_2.setParent(scene)
vegetation_09_2.addComponentOrReplace(gltfShape_46)
const transform_380 = new Transform({
  position: new Vector3(101, 0, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_09_2.addComponentOrReplace(transform_380)
engine.addEntity(vegetation_09_2)

const vegetation_08_55 = new Entity()
vegetation_08_55.setParent(scene)
vegetation_08_55.addComponentOrReplace(gltfShape_45)
const transform_381 = new Transform({
  position: new Vector3(90, 0, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_55.addComponentOrReplace(transform_381)
engine.addEntity(vegetation_08_55)

const vegetation_07 = new Entity()
vegetation_07.setParent(scene)
const gltfShape_67 = new GLTFShape('models/Vegetation_07/Vegetation_07.glb')
vegetation_07.addComponentOrReplace(gltfShape_67)
const transform_382 = new Transform({
  position: new Vector3(48, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_07.addComponentOrReplace(transform_382)
engine.addEntity(vegetation_07)

const vegetation_09_3 = new Entity()
vegetation_09_3.setParent(scene)
vegetation_09_3.addComponentOrReplace(gltfShape_46)
const transform_383 = new Transform({
  position: new Vector3(119.5, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_09_3.addComponentOrReplace(transform_383)
engine.addEntity(vegetation_09_3)

const vegetation_08_56 = new Entity()
vegetation_08_56.setParent(scene)
vegetation_08_56.addComponentOrReplace(gltfShape_45)
const transform_384 = new Transform({
  position: new Vector3(119.5, 0, 63),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_56.addComponentOrReplace(transform_384)
engine.addEntity(vegetation_08_56)

const vegetation_07_2 = new Entity()
vegetation_07_2.setParent(scene)
vegetation_07_2.addComponentOrReplace(gltfShape_67)
const transform_385 = new Transform({
  position: new Vector3(67, 0, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_07_2.addComponentOrReplace(transform_385)
engine.addEntity(vegetation_07_2)

const vegetation_08_57 = new Entity()
vegetation_08_57.setParent(scene)
vegetation_08_57.addComponentOrReplace(gltfShape_45)
const transform_386 = new Transform({
  position: new Vector3(87.5, 0, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_57.addComponentOrReplace(transform_386)
engine.addEntity(vegetation_08_57)

const vegetation_08_58 = new Entity()
vegetation_08_58.setParent(scene)
vegetation_08_58.addComponentOrReplace(gltfShape_45)
const transform_387 = new Transform({
  position: new Vector3(84, 0, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_58.addComponentOrReplace(transform_387)
engine.addEntity(vegetation_08_58)

const vegetation_09_4 = new Entity()
vegetation_09_4.setParent(scene)
vegetation_09_4.addComponentOrReplace(gltfShape_46)
const transform_388 = new Transform({
  position: new Vector3(80.5, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_09_4.addComponentOrReplace(transform_388)
engine.addEntity(vegetation_09_4)

const vegetation_08_59 = new Entity()
vegetation_08_59.setParent(scene)
vegetation_08_59.addComponentOrReplace(gltfShape_45)
const transform_389 = new Transform({
  position: new Vector3(87, 0, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_59.addComponentOrReplace(transform_389)
engine.addEntity(vegetation_08_59)

const vegetation_09_5 = new Entity()
vegetation_09_5.setParent(scene)
vegetation_09_5.addComponentOrReplace(gltfShape_46)
const transform_390 = new Transform({
  position: new Vector3(95.5, 0, 6.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_09_5.addComponentOrReplace(transform_390)
engine.addEntity(vegetation_09_5)

const vegetation_05 = new Entity()
vegetation_05.setParent(scene)
const gltfShape_68 = new GLTFShape('models/Vegetation_05/Vegetation_05.glb')
vegetation_05.addComponentOrReplace(gltfShape_68)
const transform_391 = new Transform({
  position: new Vector3(54, 0, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_05.addComponentOrReplace(transform_391)
engine.addEntity(vegetation_05)

const vegetation_07_3 = new Entity()
vegetation_07_3.setParent(scene)
vegetation_07_3.addComponentOrReplace(gltfShape_67)
const transform_392 = new Transform({
  position: new Vector3(45, 0, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_07_3.addComponentOrReplace(transform_392)
engine.addEntity(vegetation_07_3)

const vegetation_08_60 = new Entity()
vegetation_08_60.setParent(scene)
vegetation_08_60.addComponentOrReplace(gltfShape_45)
const transform_393 = new Transform({
  position: new Vector3(58, 0, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_60.addComponentOrReplace(transform_393)
engine.addEntity(vegetation_08_60)

const vegetation_09_6 = new Entity()
vegetation_09_6.setParent(scene)
vegetation_09_6.addComponentOrReplace(gltfShape_46)
const transform_394 = new Transform({
  position: new Vector3(35.5, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_09_6.addComponentOrReplace(transform_394)
engine.addEntity(vegetation_09_6)

const vegetation_09_7 = new Entity()
vegetation_09_7.setParent(scene)
vegetation_09_7.addComponentOrReplace(gltfShape_46)
const transform_395 = new Transform({
  position: new Vector3(117, 0, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_09_7.addComponentOrReplace(transform_395)
engine.addEntity(vegetation_09_7)

const vegetation_09_8 = new Entity()
vegetation_09_8.setParent(scene)
vegetation_09_8.addComponentOrReplace(gltfShape_46)
const transform_396 = new Transform({
  position: new Vector3(97.5, 0, 9.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_09_8.addComponentOrReplace(transform_396)
engine.addEntity(vegetation_09_8)

const vegetation_09_9 = new Entity()
vegetation_09_9.setParent(scene)
vegetation_09_9.addComponentOrReplace(gltfShape_46)
const transform_397 = new Transform({
  position: new Vector3(86.5, 0, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_09_9.addComponentOrReplace(transform_397)
engine.addEntity(vegetation_09_9)

const vegetation_09_10 = new Entity()
vegetation_09_10.setParent(scene)
vegetation_09_10.addComponentOrReplace(gltfShape_46)
const transform_398 = new Transform({
  position: new Vector3(71.5, 0, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_09_10.addComponentOrReplace(transform_398)
engine.addEntity(vegetation_09_10)

const vegetation_09_11 = new Entity()
vegetation_09_11.setParent(scene)
vegetation_09_11.addComponentOrReplace(gltfShape_46)
const transform_399 = new Transform({
  position: new Vector3(74.5, 0, 4.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_09_11.addComponentOrReplace(transform_399)
engine.addEntity(vegetation_09_11)

const vegetation_09_12 = new Entity()
vegetation_09_12.setParent(scene)
vegetation_09_12.addComponentOrReplace(gltfShape_46)
const transform_400 = new Transform({
  position: new Vector3(66, 0, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_09_12.addComponentOrReplace(transform_400)
engine.addEntity(vegetation_09_12)

const vegetation_09_13 = new Entity()
vegetation_09_13.setParent(scene)
vegetation_09_13.addComponentOrReplace(gltfShape_46)
const transform_401 = new Transform({
  position: new Vector3(59.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_09_13.addComponentOrReplace(transform_401)
engine.addEntity(vegetation_09_13)

const vegetation_09_14 = new Entity()
vegetation_09_14.setParent(scene)
vegetation_09_14.addComponentOrReplace(gltfShape_46)
const transform_402 = new Transform({
  position: new Vector3(62.5, 0, 4.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_09_14.addComponentOrReplace(transform_402)
engine.addEntity(vegetation_09_14)

const vegetation_09_15 = new Entity()
vegetation_09_15.setParent(scene)
vegetation_09_15.addComponentOrReplace(gltfShape_46)
const transform_403 = new Transform({
  position: new Vector3(70, 0, 9.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_09_15.addComponentOrReplace(transform_403)
engine.addEntity(vegetation_09_15)

const vegetation_07_4 = new Entity()
vegetation_07_4.setParent(scene)
vegetation_07_4.addComponentOrReplace(gltfShape_67)
const transform_404 = new Transform({
  position: new Vector3(104, 0, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_07_4.addComponentOrReplace(transform_404)
engine.addEntity(vegetation_07_4)

const vegetation_04 = new Entity()
vegetation_04.setParent(scene)
const gltfShape_69 = new GLTFShape('models/Vegetation_04/Vegetation_04.glb')
vegetation_04.addComponentOrReplace(gltfShape_69)
const transform_405 = new Transform({
  position: new Vector3(116, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_04.addComponentOrReplace(transform_405)
engine.addEntity(vegetation_04)

const vegetation_06_2 = new Entity()
vegetation_06_2.setParent(scene)
vegetation_06_2.addComponentOrReplace(gltfShape_47)
const transform_406 = new Transform({
  position: new Vector3(95.5, 0, 6.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_06_2.addComponentOrReplace(transform_406)
engine.addEntity(vegetation_06_2)

const vegetation_05_2 = new Entity()
vegetation_05_2.setParent(scene)
vegetation_05_2.addComponentOrReplace(gltfShape_68)
const transform_407 = new Transform({
  position: new Vector3(99.5, 0, 6.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_05_2.addComponentOrReplace(transform_407)
engine.addEntity(vegetation_05_2)

const vegetation_05_3 = new Entity()
vegetation_05_3.setParent(scene)
vegetation_05_3.addComponentOrReplace(gltfShape_68)
const transform_408 = new Transform({
  position: new Vector3(92.5, 0, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_05_3.addComponentOrReplace(transform_408)
engine.addEntity(vegetation_05_3)

const vegetation_02_12 = new Entity()
vegetation_02_12.setParent(scene)
vegetation_02_12.addComponentOrReplace(gltfShape_48)
const transform_409 = new Transform({
  position: new Vector3(99.5, 0, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_02_12.addComponentOrReplace(transform_409)
engine.addEntity(vegetation_02_12)

const vegetation_01 = new Entity()
vegetation_01.setParent(scene)
const gltfShape_70 = new GLTFShape('models/Vegetation_01/Vegetation_01.glb')
vegetation_01.addComponentOrReplace(gltfShape_70)
const transform_410 = new Transform({
  position: new Vector3(88, 0, 3.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_01.addComponentOrReplace(transform_410)
engine.addEntity(vegetation_01)

const vegetation_02_13 = new Entity()
vegetation_02_13.setParent(scene)
vegetation_02_13.addComponentOrReplace(gltfShape_48)
const transform_411 = new Transform({
  position: new Vector3(81, 0, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_02_13.addComponentOrReplace(transform_411)
engine.addEntity(vegetation_02_13)

const vegetation_03 = new Entity()
vegetation_03.setParent(scene)
const gltfShape_71 = new GLTFShape('models/Vegetation_03/Vegetation_03.glb')
vegetation_03.addComponentOrReplace(gltfShape_71)
const transform_412 = new Transform({
  position: new Vector3(107.5, 0, 9.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_03.addComponentOrReplace(transform_412)
engine.addEntity(vegetation_03)

const vegetation_03_2 = new Entity()
vegetation_03_2.setParent(scene)
vegetation_03_2.addComponentOrReplace(gltfShape_71)
const transform_413 = new Transform({
  position: new Vector3(74.5, 0, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_03_2.addComponentOrReplace(transform_413)
engine.addEntity(vegetation_03_2)

const vegetation_03_3 = new Entity()
vegetation_03_3.setParent(scene)
vegetation_03_3.addComponentOrReplace(gltfShape_71)
const transform_414 = new Transform({
  position: new Vector3(48, 0, 6.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_03_3.addComponentOrReplace(transform_414)
engine.addEntity(vegetation_03_3)

const vegetation_03_4 = new Entity()
vegetation_03_4.setParent(scene)
vegetation_03_4.addComponentOrReplace(gltfShape_71)
const transform_415 = new Transform({
  position: new Vector3(73, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_03_4.addComponentOrReplace(transform_415)
engine.addEntity(vegetation_03_4)

const vegetation_06_3 = new Entity()
vegetation_06_3.setParent(scene)
vegetation_06_3.addComponentOrReplace(gltfShape_47)
const transform_416 = new Transform({
  position: new Vector3(71, 0, 6.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_06_3.addComponentOrReplace(transform_416)
engine.addEntity(vegetation_06_3)

const vegetation_05_4 = new Entity()
vegetation_05_4.setParent(scene)
vegetation_05_4.addComponentOrReplace(gltfShape_68)
const transform_417 = new Transform({
  position: new Vector3(61, 0, 9.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_05_4.addComponentOrReplace(transform_417)
engine.addEntity(vegetation_05_4)

const vegetation_08_61 = new Entity()
vegetation_08_61.setParent(scene)
vegetation_08_61.addComponentOrReplace(gltfShape_45)
const transform_418 = new Transform({
  position: new Vector3(56.5, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_61.addComponentOrReplace(transform_418)
engine.addEntity(vegetation_08_61)

const vegetation_08_62 = new Entity()
vegetation_08_62.setParent(scene)
vegetation_08_62.addComponentOrReplace(gltfShape_45)
const transform_419 = new Transform({
  position: new Vector3(48.5, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_62.addComponentOrReplace(transform_419)
engine.addEntity(vegetation_08_62)

const vegetation_08_63 = new Entity()
vegetation_08_63.setParent(scene)
vegetation_08_63.addComponentOrReplace(gltfShape_45)
const transform_420 = new Transform({
  position: new Vector3(61.5, 0, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_63.addComponentOrReplace(transform_420)
engine.addEntity(vegetation_08_63)

const vegetation_08_64 = new Entity()
vegetation_08_64.setParent(scene)
vegetation_08_64.addComponentOrReplace(gltfShape_45)
const transform_421 = new Transform({
  position: new Vector3(51.5, 0, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_64.addComponentOrReplace(transform_421)
engine.addEntity(vegetation_08_64)

const vegetation_09_16 = new Entity()
vegetation_09_16.setParent(scene)
vegetation_09_16.addComponentOrReplace(gltfShape_46)
const transform_422 = new Transform({
  position: new Vector3(47, 0, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_09_16.addComponentOrReplace(transform_422)
engine.addEntity(vegetation_09_16)

const vegetation_09_17 = new Entity()
vegetation_09_17.setParent(scene)
vegetation_09_17.addComponentOrReplace(gltfShape_46)
const transform_423 = new Transform({
  position: new Vector3(72.5, 0, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_09_17.addComponentOrReplace(transform_423)
engine.addEntity(vegetation_09_17)

const vegetation_09_18 = new Entity()
vegetation_09_18.setParent(scene)
vegetation_09_18.addComponentOrReplace(gltfShape_46)
const transform_424 = new Transform({
  position: new Vector3(44.5, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_09_18.addComponentOrReplace(transform_424)
engine.addEntity(vegetation_09_18)

const vegetation_09_19 = new Entity()
vegetation_09_19.setParent(scene)
vegetation_09_19.addComponentOrReplace(gltfShape_46)
const transform_425 = new Transform({
  position: new Vector3(23, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_09_19.addComponentOrReplace(transform_425)
engine.addEntity(vegetation_09_19)

const vegetation_08_65 = new Entity()
vegetation_08_65.setParent(scene)
vegetation_08_65.addComponentOrReplace(gltfShape_45)
const transform_426 = new Transform({
  position: new Vector3(55, 0, 4.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_65.addComponentOrReplace(transform_426)
engine.addEntity(vegetation_08_65)

const vegetation_08_66 = new Entity()
vegetation_08_66.setParent(scene)
vegetation_08_66.addComponentOrReplace(gltfShape_45)
const transform_427 = new Transform({
  position: new Vector3(33, 0, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_66.addComponentOrReplace(transform_427)
engine.addEntity(vegetation_08_66)

const vegetation_08_67 = new Entity()
vegetation_08_67.setParent(scene)
vegetation_08_67.addComponentOrReplace(gltfShape_45)
const transform_428 = new Transform({
  position: new Vector3(41.5, 0, 2.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_67.addComponentOrReplace(transform_428)
engine.addEntity(vegetation_08_67)

const vegetation_08_68 = new Entity()
vegetation_08_68.setParent(scene)
vegetation_08_68.addComponentOrReplace(gltfShape_45)
const transform_429 = new Transform({
  position: new Vector3(40.5, 0, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_68.addComponentOrReplace(transform_429)
engine.addEntity(vegetation_08_68)

const vegetation_05_5 = new Entity()
vegetation_05_5.setParent(scene)
vegetation_05_5.addComponentOrReplace(gltfShape_68)
const transform_430 = new Transform({
  position: new Vector3(59.5, 0, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_05_5.addComponentOrReplace(transform_430)
engine.addEntity(vegetation_05_5)

const vegetation_08_69 = new Entity()
vegetation_08_69.setParent(scene)
vegetation_08_69.addComponentOrReplace(gltfShape_45)
const transform_431 = new Transform({
  position: new Vector3(51, 0, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_69.addComponentOrReplace(transform_431)
engine.addEntity(vegetation_08_69)

const vegetation_08_70 = new Entity()
vegetation_08_70.setParent(scene)
vegetation_08_70.addComponentOrReplace(gltfShape_45)
const transform_432 = new Transform({
  position: new Vector3(30.5, 0, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_70.addComponentOrReplace(transform_432)
engine.addEntity(vegetation_08_70)

const vegetation_08_71 = new Entity()
vegetation_08_71.setParent(scene)
vegetation_08_71.addComponentOrReplace(gltfShape_45)
const transform_433 = new Transform({
  position: new Vector3(42, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_08_71.addComponentOrReplace(transform_433)
engine.addEntity(vegetation_08_71)

const vegetation_02_14 = new Entity()
vegetation_02_14.setParent(scene)
vegetation_02_14.addComponentOrReplace(gltfShape_48)
const transform_434 = new Transform({
  position: new Vector3(26, 0, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_02_14.addComponentOrReplace(transform_434)
engine.addEntity(vegetation_02_14)

const vegetation_02_15 = new Entity()
vegetation_02_15.setParent(scene)
vegetation_02_15.addComponentOrReplace(gltfShape_48)
const transform_435 = new Transform({
  position: new Vector3(46.5, 0, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_02_15.addComponentOrReplace(transform_435)
engine.addEntity(vegetation_02_15)

const vegetation_02_16 = new Entity()
vegetation_02_16.setParent(scene)
vegetation_02_16.addComponentOrReplace(gltfShape_48)
const transform_436 = new Transform({
  position: new Vector3(36, 0, 2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_02_16.addComponentOrReplace(transform_436)
engine.addEntity(vegetation_02_16)

const vegetation_02_17 = new Entity()
vegetation_02_17.setParent(scene)
vegetation_02_17.addComponentOrReplace(gltfShape_48)
const transform_437 = new Transform({
  position: new Vector3(28.5, 0, 3.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_02_17.addComponentOrReplace(transform_437)
engine.addEntity(vegetation_02_17)

const vegetation_02_18 = new Entity()
vegetation_02_18.setParent(scene)
vegetation_02_18.addComponentOrReplace(gltfShape_48)
const transform_438 = new Transform({
  position: new Vector3(86.5, 0, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_02_18.addComponentOrReplace(transform_438)
engine.addEntity(vegetation_02_18)

const vegetation_02_19 = new Entity()
vegetation_02_19.setParent(scene)
vegetation_02_19.addComponentOrReplace(gltfShape_48)
const transform_439 = new Transform({
  position: new Vector3(88.5, 0, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_02_19.addComponentOrReplace(transform_439)
engine.addEntity(vegetation_02_19)

const vegetation_02_20 = new Entity()
vegetation_02_20.setParent(scene)
vegetation_02_20.addComponentOrReplace(gltfShape_48)
const transform_440 = new Transform({
  position: new Vector3(98.5, 0, 61),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_02_20.addComponentOrReplace(transform_440)
engine.addEntity(vegetation_02_20)

const vegetation_02_21 = new Entity()
vegetation_02_21.setParent(scene)
vegetation_02_21.addComponentOrReplace(gltfShape_48)
const transform_441 = new Transform({
  position: new Vector3(88, 0, 3.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_02_21.addComponentOrReplace(transform_441)
engine.addEntity(vegetation_02_21)

const vegetation_02_22 = new Entity()
vegetation_02_22.setParent(scene)
vegetation_02_22.addComponentOrReplace(gltfShape_48)
const transform_442 = new Transform({
  position: new Vector3(79.5, 0, 3),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_02_22.addComponentOrReplace(transform_442)
engine.addEntity(vegetation_02_22)

const vegetation_02_23 = new Entity()
vegetation_02_23.setParent(scene)
vegetation_02_23.addComponentOrReplace(gltfShape_48)
const transform_443 = new Transform({
  position: new Vector3(91, 0, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_02_23.addComponentOrReplace(transform_443)
engine.addEntity(vegetation_02_23)

const vegetation_02_24 = new Entity()
vegetation_02_24.setParent(scene)
vegetation_02_24.addComponentOrReplace(gltfShape_48)
const transform_444 = new Transform({
  position: new Vector3(121, 0, 3),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_02_24.addComponentOrReplace(transform_444)
engine.addEntity(vegetation_02_24)

const vegetation_02_25 = new Entity()
vegetation_02_25.setParent(scene)
vegetation_02_25.addComponentOrReplace(gltfShape_48)
const transform_445 = new Transform({
  position: new Vector3(118.5, 0, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_02_25.addComponentOrReplace(transform_445)
engine.addEntity(vegetation_02_25)

const vegetation_02_26 = new Entity()
vegetation_02_26.setParent(scene)
vegetation_02_26.addComponentOrReplace(gltfShape_48)
const transform_446 = new Transform({
  position: new Vector3(121, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_02_26.addComponentOrReplace(transform_446)
engine.addEntity(vegetation_02_26)

const vegetation_02_27 = new Entity()
vegetation_02_27.setParent(scene)
vegetation_02_27.addComponentOrReplace(gltfShape_48)
const transform_447 = new Transform({
  position: new Vector3(106, 0, 4.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_02_27.addComponentOrReplace(transform_447)
engine.addEntity(vegetation_02_27)

const vegetation_07_5 = new Entity()
vegetation_07_5.setParent(scene)
vegetation_07_5.addComponentOrReplace(gltfShape_67)
const transform_448 = new Transform({
  position: new Vector3(108, 0, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vegetation_07_5.addComponentOrReplace(transform_448)
engine.addEntity(vegetation_07_5)

const stalagmite_04_2 = new Entity()
stalagmite_04_2.setParent(scene)
stalagmite_04_2.addComponentOrReplace(gltfShape_44)
const transform_449 = new Transform({
  position: new Vector3(108, 0, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
stalagmite_04_2.addComponentOrReplace(transform_449)
engine.addEntity(stalagmite_04_2)

const mushrooms_04_3 = new Entity()
mushrooms_04_3.setParent(scene)
mushrooms_04_3.addComponentOrReplace(gltfShape_57)
const transform_450 = new Transform({
  position: new Vector3(97.5, 0, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
mushrooms_04_3.addComponentOrReplace(transform_450)
engine.addEntity(mushrooms_04_3)

const mushrooms_05_3 = new Entity()
mushrooms_05_3.setParent(scene)
mushrooms_05_3.addComponentOrReplace(gltfShape_58)
const transform_451 = new Transform({
  position: new Vector3(122, 0, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
mushrooms_05_3.addComponentOrReplace(transform_451)
engine.addEntity(mushrooms_05_3)

const mushrooms_03_3 = new Entity()
mushrooms_03_3.setParent(scene)
mushrooms_03_3.addComponentOrReplace(gltfShape_59)
const transform_452 = new Transform({
  position: new Vector3(86.5, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
mushrooms_03_3.addComponentOrReplace(transform_452)
engine.addEntity(mushrooms_03_3)

const log_Large_01 = new Entity()
log_Large_01.setParent(scene)
const gltfShape_72 = new GLTFShape('models/Log_Large_01/Log_Large_01.glb')
log_Large_01.addComponentOrReplace(gltfShape_72)
const transform_453 = new Transform({
  position: new Vector3(82.5, 0, 3.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
log_Large_01.addComponentOrReplace(transform_453)
engine.addEntity(log_Large_01)

const log_Small_01_2 = new Entity()
log_Small_01_2.setParent(scene)
log_Small_01_2.addComponentOrReplace(gltfShape_55)
const transform_454 = new Transform({
  position: new Vector3(105, 0, 9.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
log_Small_01_2.addComponentOrReplace(transform_454)
engine.addEntity(log_Small_01_2)

const chest_01 = new Entity()
chest_01.setParent(scene)
const gltfShape_73 = new GLTFShape('models/Chest_01/Chest_01.glb')
chest_01.addComponentOrReplace(gltfShape_73)
const transform_455 = new Transform({
  position: new Vector3(21.5, 0, 14.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chest_01.addComponentOrReplace(transform_455)
engine.addEntity(chest_01)

const chair_Wood_01 = new Entity()
chair_Wood_01.setParent(scene)
const gltfShape_74 = new GLTFShape('models/Chair_Wood_01/Chair_Wood_01.glb')
chair_Wood_01.addComponentOrReplace(gltfShape_74)
const transform_456 = new Transform({
  position: new Vector3(20.5, 0, 18),
  rotation: new Quaternion(0, -0.6343932841636457, 0, 0.7730104533627371),
  scale: new Vector3(1, 1, 1)
})
chair_Wood_01.addComponentOrReplace(transform_456)
engine.addEntity(chair_Wood_01)

const crystal_01 = new Entity()
crystal_01.setParent(scene)
const gltfShape_75 = new GLTFShape('models/Crystal_01/Crystal_01.glb')
crystal_01.addComponentOrReplace(gltfShape_75)
const transform_457 = new Transform({
  position: new Vector3(31, 0, 17),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
crystal_01.addComponentOrReplace(transform_457)
engine.addEntity(crystal_01)

const shelf_03 = new Entity()
shelf_03.setParent(scene)
const gltfShape_76 = new GLTFShape('models/Shelf_03/Shelf_03.glb')
shelf_03.addComponentOrReplace(gltfShape_76)
const transform_458 = new Transform({
  position: new Vector3(110.5, 0, 13.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
shelf_03.addComponentOrReplace(transform_458)
engine.addEntity(shelf_03)

const shelf_03_2 = new Entity()
shelf_03_2.setParent(scene)
shelf_03_2.addComponentOrReplace(gltfShape_76)
const transform_459 = new Transform({
  position: new Vector3(102, 0, 13.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
shelf_03_2.addComponentOrReplace(transform_459)
engine.addEntity(shelf_03_2)

const stone_Magic_01 = new Entity()
stone_Magic_01.setParent(scene)
const gltfShape_77 = new GLTFShape('models/Stone_Magic_01/Stone_Magic_01.glb')
stone_Magic_01.addComponentOrReplace(gltfShape_77)
const transform_460 = new Transform({
  position: new Vector3(118, 0, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
stone_Magic_01.addComponentOrReplace(transform_460)
engine.addEntity(stone_Magic_01)

const vase_07 = new Entity()
vase_07.setParent(scene)
const gltfShape_78 = new GLTFShape('models/Vase_07/Vase_07.glb')
vase_07.addComponentOrReplace(gltfShape_78)
const transform_461 = new Transform({
  position: new Vector3(62, 0, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vase_07.addComponentOrReplace(transform_461)
engine.addEntity(vase_07)

const chest_Box_01 = new Entity()
chest_Box_01.setParent(scene)
const gltfShape_79 = new GLTFShape('models/Chest_Box_01/Chest_Box_01.glb')
chest_Box_01.addComponentOrReplace(gltfShape_79)
const transform_462 = new Transform({
  position: new Vector3(111, 0, 46),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chest_Box_01.addComponentOrReplace(transform_462)
engine.addEntity(chest_Box_01)

const wallCloths_Red_01 = new Entity()
wallCloths_Red_01.setParent(scene)
const gltfShape_80 = new GLTFShape('models/WallCloths_Red_01/WallCloths_Red_01.glb')
wallCloths_Red_01.addComponentOrReplace(gltfShape_80)
const transform_463 = new Transform({
  position: new Vector3(118, 0, 10.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallCloths_Red_01.addComponentOrReplace(transform_463)
engine.addEntity(wallCloths_Red_01)

const rockFloor_Module_2M = new Entity()
rockFloor_Module_2M.setParent(scene)
const gltfShape_81 = new GLTFShape('models/RockFloor_Module_2M/RockFloor_Module_2M.glb')
rockFloor_Module_2M.addComponentOrReplace(gltfShape_81)
const transform_464 = new Transform({
  position: new Vector3(111.5, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rockFloor_Module_2M.addComponentOrReplace(transform_464)
engine.addEntity(rockFloor_Module_2M)

const rockFloor_Module_2M_2 = new Entity()
rockFloor_Module_2M_2.setParent(scene)
rockFloor_Module_2M_2.addComponentOrReplace(gltfShape_81)
const transform_465 = new Transform({
  position: new Vector3(104, 0, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rockFloor_Module_2M_2.addComponentOrReplace(transform_465)
engine.addEntity(rockFloor_Module_2M_2)

const shelf_03_3 = new Entity()
shelf_03_3.setParent(scene)
shelf_03_3.addComponentOrReplace(gltfShape_76)
const transform_466 = new Transform({
  position: new Vector3(94.5, 0, 13.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
shelf_03_3.addComponentOrReplace(transform_466)
engine.addEntity(shelf_03_3)

const shelf_03_4 = new Entity()
shelf_03_4.setParent(scene)
shelf_03_4.addComponentOrReplace(gltfShape_76)
const transform_467 = new Transform({
  position: new Vector3(86, 0, 13.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
shelf_03_4.addComponentOrReplace(transform_467)
engine.addEntity(shelf_03_4)

const shelf_03_5 = new Entity()
shelf_03_5.setParent(scene)
shelf_03_5.addComponentOrReplace(gltfShape_76)
const transform_468 = new Transform({
  position: new Vector3(78, 0, 13.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
shelf_03_5.addComponentOrReplace(transform_468)
engine.addEntity(shelf_03_5)

const shelf_03_6 = new Entity()
shelf_03_6.setParent(scene)
shelf_03_6.addComponentOrReplace(gltfShape_76)
const transform_469 = new Transform({
  position: new Vector3(70.5, 0, 13.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
shelf_03_6.addComponentOrReplace(transform_469)
engine.addEntity(shelf_03_6)

const rockFloor_Module_2M_3 = new Entity()
rockFloor_Module_2M_3.setParent(scene)
rockFloor_Module_2M_3.addComponentOrReplace(gltfShape_81)
const transform_470 = new Transform({
  position: new Vector3(95.5, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rockFloor_Module_2M_3.addComponentOrReplace(transform_470)
engine.addEntity(rockFloor_Module_2M_3)

const rockFloor_Module_2M_4 = new Entity()
rockFloor_Module_2M_4.setParent(scene)
rockFloor_Module_2M_4.addComponentOrReplace(gltfShape_81)
const transform_471 = new Transform({
  position: new Vector3(87, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rockFloor_Module_2M_4.addComponentOrReplace(transform_471)
engine.addEntity(rockFloor_Module_2M_4)

const rockFloor_Module_2M_5 = new Entity()
rockFloor_Module_2M_5.setParent(scene)
rockFloor_Module_2M_5.addComponentOrReplace(gltfShape_81)
const transform_472 = new Transform({
  position: new Vector3(79, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rockFloor_Module_2M_5.addComponentOrReplace(transform_472)
engine.addEntity(rockFloor_Module_2M_5)

const rockFloor_Module_2M_6 = new Entity()
rockFloor_Module_2M_6.setParent(scene)
rockFloor_Module_2M_6.addComponentOrReplace(gltfShape_81)
const transform_473 = new Transform({
  position: new Vector3(71.5, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rockFloor_Module_2M_6.addComponentOrReplace(transform_473)
engine.addEntity(rockFloor_Module_2M_6)

const rockFloor_Module_2M_7 = new Entity()
rockFloor_Module_2M_7.setParent(scene)
rockFloor_Module_2M_7.addComponentOrReplace(gltfShape_81)
const transform_474 = new Transform({
  position: new Vector3(71.5, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rockFloor_Module_2M_7.addComponentOrReplace(transform_474)
engine.addEntity(rockFloor_Module_2M_7)

const tableRock_01 = new Entity()
tableRock_01.setParent(scene)
const gltfShape_82 = new GLTFShape('models/TableRock_01/TableRock_01.glb')
tableRock_01.addComponentOrReplace(gltfShape_82)
const transform_475 = new Transform({
  position: new Vector3(110.5, 0, 48),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tableRock_01.addComponentOrReplace(transform_475)
engine.addEntity(tableRock_01)

const bonesChest_01 = new Entity()
bonesChest_01.setParent(scene)
const gltfShape_83 = new GLTFShape('models/BonesChest_01/BonesChest_01.glb')
bonesChest_01.addComponentOrReplace(gltfShape_83)
const transform_476 = new Transform({
  position: new Vector3(110.5, 1, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bonesChest_01.addComponentOrReplace(transform_476)
engine.addEntity(bonesChest_01)

const tableRock_01_2 = new Entity()
tableRock_01_2.setParent(scene)
tableRock_01_2.addComponentOrReplace(gltfShape_82)
const transform_477 = new Transform({
  position: new Vector3(103, 0, 48),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tableRock_01_2.addComponentOrReplace(transform_477)
engine.addEntity(tableRock_01_2)

const tableRock_01_3 = new Entity()
tableRock_01_3.setParent(scene)
tableRock_01_3.addComponentOrReplace(gltfShape_82)
const transform_478 = new Transform({
  position: new Vector3(94.5, 0, 48),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tableRock_01_3.addComponentOrReplace(transform_478)
engine.addEntity(tableRock_01_3)

const tableRock_01_4 = new Entity()
tableRock_01_4.setParent(scene)
tableRock_01_4.addComponentOrReplace(gltfShape_82)
const transform_479 = new Transform({
  position: new Vector3(87, 0, 48),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tableRock_01_4.addComponentOrReplace(transform_479)
engine.addEntity(tableRock_01_4)

const tableRock_01_5 = new Entity()
tableRock_01_5.setParent(scene)
tableRock_01_5.addComponentOrReplace(gltfShape_82)
const transform_480 = new Transform({
  position: new Vector3(79.5, 0, 48),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tableRock_01_5.addComponentOrReplace(transform_480)
engine.addEntity(tableRock_01_5)

const tableRock_01_6 = new Entity()
tableRock_01_6.setParent(scene)
tableRock_01_6.addComponentOrReplace(gltfShape_82)
const transform_481 = new Transform({
  position: new Vector3(72.5, 0, 48),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tableRock_01_6.addComponentOrReplace(transform_481)
engine.addEntity(tableRock_01_6)

const rockFloor_Module_2M_8 = new Entity()
rockFloor_Module_2M_8.setParent(scene)
rockFloor_Module_2M_8.addComponentOrReplace(gltfShape_81)
const transform_482 = new Transform({
  position: new Vector3(111.5, 0, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rockFloor_Module_2M_8.addComponentOrReplace(transform_482)
engine.addEntity(rockFloor_Module_2M_8)

const rockFloor_Module_2M_9 = new Entity()
rockFloor_Module_2M_9.setParent(scene)
rockFloor_Module_2M_9.addComponentOrReplace(gltfShape_81)
const transform_483 = new Transform({
  position: new Vector3(95.5, 0, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rockFloor_Module_2M_9.addComponentOrReplace(transform_483)
engine.addEntity(rockFloor_Module_2M_9)

const rockFloor_Module_2M_10 = new Entity()
rockFloor_Module_2M_10.setParent(scene)
rockFloor_Module_2M_10.addComponentOrReplace(gltfShape_81)
const transform_484 = new Transform({
  position: new Vector3(88, 0, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rockFloor_Module_2M_10.addComponentOrReplace(transform_484)
engine.addEntity(rockFloor_Module_2M_10)

const rockFloor_Module_2M_11 = new Entity()
rockFloor_Module_2M_11.setParent(scene)
rockFloor_Module_2M_11.addComponentOrReplace(gltfShape_81)
const transform_485 = new Transform({
  position: new Vector3(80.5, 0, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rockFloor_Module_2M_11.addComponentOrReplace(transform_485)
engine.addEntity(rockFloor_Module_2M_11)

const rockFloor_Module_2M_12 = new Entity()
rockFloor_Module_2M_12.setParent(scene)
rockFloor_Module_2M_12.addComponentOrReplace(gltfShape_81)
const transform_486 = new Transform({
  position: new Vector3(73.5, 0, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rockFloor_Module_2M_12.addComponentOrReplace(transform_486)
engine.addEntity(rockFloor_Module_2M_12)

const bonesChest_01_2 = new Entity()
bonesChest_01_2.setParent(scene)
bonesChest_01_2.addComponentOrReplace(gltfShape_83)
const transform_487 = new Transform({
  position: new Vector3(103, 1, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bonesChest_01_2.addComponentOrReplace(transform_487)
engine.addEntity(bonesChest_01_2)

const bonesChest_01_3 = new Entity()
bonesChest_01_3.setParent(scene)
bonesChest_01_3.addComponentOrReplace(gltfShape_83)
const transform_488 = new Transform({
  position: new Vector3(94.5, 1, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bonesChest_01_3.addComponentOrReplace(transform_488)
engine.addEntity(bonesChest_01_3)

const bonesChest_01_4 = new Entity()
bonesChest_01_4.setParent(scene)
bonesChest_01_4.addComponentOrReplace(gltfShape_83)
const transform_489 = new Transform({
  position: new Vector3(87, 1, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bonesChest_01_4.addComponentOrReplace(transform_489)
engine.addEntity(bonesChest_01_4)

const bonesChest_01_5 = new Entity()
bonesChest_01_5.setParent(scene)
bonesChest_01_5.addComponentOrReplace(gltfShape_83)
const transform_490 = new Transform({
  position: new Vector3(79.5, 1, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bonesChest_01_5.addComponentOrReplace(transform_490)
engine.addEntity(bonesChest_01_5)

const bonesChest_01_6 = new Entity()
bonesChest_01_6.setParent(scene)
bonesChest_01_6.addComponentOrReplace(gltfShape_83)
const transform_491 = new Transform({
  position: new Vector3(72.5, 1, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bonesChest_01_6.addComponentOrReplace(transform_491)
engine.addEntity(bonesChest_01_6)

const rockFloor_Module_2M_13 = new Entity()
rockFloor_Module_2M_13.setParent(scene)
rockFloor_Module_2M_13.addComponentOrReplace(gltfShape_81)
const transform_492 = new Transform({
  position: new Vector3(103, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rockFloor_Module_2M_13.addComponentOrReplace(transform_492)
engine.addEntity(rockFloor_Module_2M_13)

const chandelier_02 = new Entity()
chandelier_02.setParent(scene)
const gltfShape_84 = new GLTFShape('models/Chandelier_02/Chandelier_02.glb')
chandelier_02.addComponentOrReplace(gltfShape_84)
const transform_493 = new Transform({
  position: new Vector3(112, 0, 48),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chandelier_02.addComponentOrReplace(transform_493)
engine.addEntity(chandelier_02)

const chandelier_02_2 = new Entity()
chandelier_02_2.setParent(scene)
chandelier_02_2.addComponentOrReplace(gltfShape_84)
const transform_494 = new Transform({
  position: new Vector3(104.5, 0, 48),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chandelier_02_2.addComponentOrReplace(transform_494)
engine.addEntity(chandelier_02_2)

const chandelier_02_3 = new Entity()
chandelier_02_3.setParent(scene)
chandelier_02_3.addComponentOrReplace(gltfShape_84)
const transform_495 = new Transform({
  position: new Vector3(96, 0, 48),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chandelier_02_3.addComponentOrReplace(transform_495)
engine.addEntity(chandelier_02_3)

const chandelier_02_4 = new Entity()
chandelier_02_4.setParent(scene)
chandelier_02_4.addComponentOrReplace(gltfShape_84)
const transform_496 = new Transform({
  position: new Vector3(74, 0, 48),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chandelier_02_4.addComponentOrReplace(transform_496)
engine.addEntity(chandelier_02_4)

const chandelier_02_5 = new Entity()
chandelier_02_5.setParent(scene)
chandelier_02_5.addComponentOrReplace(gltfShape_84)
const transform_497 = new Transform({
  position: new Vector3(88.5, 0, 48),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chandelier_02_5.addComponentOrReplace(transform_497)
engine.addEntity(chandelier_02_5)

const chandelier_02_6 = new Entity()
chandelier_02_6.setParent(scene)
chandelier_02_6.addComponentOrReplace(gltfShape_84)
const transform_498 = new Transform({
  position: new Vector3(81, 0, 48),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chandelier_02_6.addComponentOrReplace(transform_498)
engine.addEntity(chandelier_02_6)

const floorBaseGrass_02 = new Entity()
floorBaseGrass_02.setParent(scene)
const gltfShape_85 = new GLTFShape('models/FloorBaseGrass_02/FloorBaseGrass_02.glb')
floorBaseGrass_02.addComponentOrReplace(gltfShape_85)
const transform_499 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02.addComponentOrReplace(transform_499)
engine.addEntity(floorBaseGrass_02)

const floorBaseGrass_02_2 = new Entity()
floorBaseGrass_02_2.setParent(scene)
floorBaseGrass_02_2.addComponentOrReplace(gltfShape_85)
const transform_500 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_2.addComponentOrReplace(transform_500)
engine.addEntity(floorBaseGrass_02_2)

const floorBaseGrass_02_3 = new Entity()
floorBaseGrass_02_3.setParent(scene)
floorBaseGrass_02_3.addComponentOrReplace(gltfShape_85)
const transform_501 = new Transform({
  position: new Vector3(40, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_3.addComponentOrReplace(transform_501)
engine.addEntity(floorBaseGrass_02_3)

const floorBaseGrass_02_4 = new Entity()
floorBaseGrass_02_4.setParent(scene)
floorBaseGrass_02_4.addComponentOrReplace(gltfShape_85)
const transform_502 = new Transform({
  position: new Vector3(56, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_4.addComponentOrReplace(transform_502)
engine.addEntity(floorBaseGrass_02_4)

const floorBaseGrass_02_5 = new Entity()
floorBaseGrass_02_5.setParent(scene)
floorBaseGrass_02_5.addComponentOrReplace(gltfShape_85)
const transform_503 = new Transform({
  position: new Vector3(72, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_5.addComponentOrReplace(transform_503)
engine.addEntity(floorBaseGrass_02_5)

const floorBaseGrass_02_6 = new Entity()
floorBaseGrass_02_6.setParent(scene)
floorBaseGrass_02_6.addComponentOrReplace(gltfShape_85)
const transform_504 = new Transform({
  position: new Vector3(88, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_6.addComponentOrReplace(transform_504)
engine.addEntity(floorBaseGrass_02_6)

const floorBaseGrass_02_7 = new Entity()
floorBaseGrass_02_7.setParent(scene)
floorBaseGrass_02_7.addComponentOrReplace(gltfShape_85)
const transform_505 = new Transform({
  position: new Vector3(104, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_7.addComponentOrReplace(transform_505)
engine.addEntity(floorBaseGrass_02_7)

const floorBaseGrass_02_8 = new Entity()
floorBaseGrass_02_8.setParent(scene)
floorBaseGrass_02_8.addComponentOrReplace(gltfShape_85)
const transform_506 = new Transform({
  position: new Vector3(120, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_8.addComponentOrReplace(transform_506)
engine.addEntity(floorBaseGrass_02_8)

const floorBaseGrass_02_9 = new Entity()
floorBaseGrass_02_9.setParent(scene)
floorBaseGrass_02_9.addComponentOrReplace(gltfShape_85)
const transform_507 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_9.addComponentOrReplace(transform_507)
engine.addEntity(floorBaseGrass_02_9)

const floorBaseGrass_02_10 = new Entity()
floorBaseGrass_02_10.setParent(scene)
floorBaseGrass_02_10.addComponentOrReplace(gltfShape_85)
const transform_508 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_10.addComponentOrReplace(transform_508)
engine.addEntity(floorBaseGrass_02_10)

const floorBaseGrass_02_11 = new Entity()
floorBaseGrass_02_11.setParent(scene)
floorBaseGrass_02_11.addComponentOrReplace(gltfShape_85)
const transform_509 = new Transform({
  position: new Vector3(40, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_11.addComponentOrReplace(transform_509)
engine.addEntity(floorBaseGrass_02_11)

const floorBaseGrass_02_12 = new Entity()
floorBaseGrass_02_12.setParent(scene)
floorBaseGrass_02_12.addComponentOrReplace(gltfShape_85)
const transform_510 = new Transform({
  position: new Vector3(56, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_12.addComponentOrReplace(transform_510)
engine.addEntity(floorBaseGrass_02_12)

const floorBaseGrass_02_13 = new Entity()
floorBaseGrass_02_13.setParent(scene)
floorBaseGrass_02_13.addComponentOrReplace(gltfShape_85)
const transform_511 = new Transform({
  position: new Vector3(72, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_13.addComponentOrReplace(transform_511)
engine.addEntity(floorBaseGrass_02_13)

const floorBaseGrass_02_14 = new Entity()
floorBaseGrass_02_14.setParent(scene)
floorBaseGrass_02_14.addComponentOrReplace(gltfShape_85)
const transform_512 = new Transform({
  position: new Vector3(88, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_14.addComponentOrReplace(transform_512)
engine.addEntity(floorBaseGrass_02_14)

const floorBaseGrass_02_15 = new Entity()
floorBaseGrass_02_15.setParent(scene)
floorBaseGrass_02_15.addComponentOrReplace(gltfShape_85)
const transform_513 = new Transform({
  position: new Vector3(104, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_15.addComponentOrReplace(transform_513)
engine.addEntity(floorBaseGrass_02_15)

const floorBaseGrass_02_16 = new Entity()
floorBaseGrass_02_16.setParent(scene)
floorBaseGrass_02_16.addComponentOrReplace(gltfShape_85)
const transform_514 = new Transform({
  position: new Vector3(120, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_16.addComponentOrReplace(transform_514)
engine.addEntity(floorBaseGrass_02_16)

const floorBaseGrass_02_17 = new Entity()
floorBaseGrass_02_17.setParent(scene)
floorBaseGrass_02_17.addComponentOrReplace(gltfShape_85)
const transform_515 = new Transform({
  position: new Vector3(8, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_17.addComponentOrReplace(transform_515)
engine.addEntity(floorBaseGrass_02_17)

const floorBaseGrass_02_18 = new Entity()
floorBaseGrass_02_18.setParent(scene)
floorBaseGrass_02_18.addComponentOrReplace(gltfShape_85)
const transform_516 = new Transform({
  position: new Vector3(24, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_18.addComponentOrReplace(transform_516)
engine.addEntity(floorBaseGrass_02_18)

const floorBaseGrass_02_19 = new Entity()
floorBaseGrass_02_19.setParent(scene)
floorBaseGrass_02_19.addComponentOrReplace(gltfShape_85)
const transform_517 = new Transform({
  position: new Vector3(40, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_19.addComponentOrReplace(transform_517)
engine.addEntity(floorBaseGrass_02_19)

const floorBaseGrass_02_20 = new Entity()
floorBaseGrass_02_20.setParent(scene)
floorBaseGrass_02_20.addComponentOrReplace(gltfShape_85)
const transform_518 = new Transform({
  position: new Vector3(56, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_20.addComponentOrReplace(transform_518)
engine.addEntity(floorBaseGrass_02_20)

const floorBaseGrass_02_21 = new Entity()
floorBaseGrass_02_21.setParent(scene)
floorBaseGrass_02_21.addComponentOrReplace(gltfShape_85)
const transform_519 = new Transform({
  position: new Vector3(72, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_21.addComponentOrReplace(transform_519)
engine.addEntity(floorBaseGrass_02_21)

const floorBaseGrass_02_22 = new Entity()
floorBaseGrass_02_22.setParent(scene)
floorBaseGrass_02_22.addComponentOrReplace(gltfShape_85)
const transform_520 = new Transform({
  position: new Vector3(88, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_22.addComponentOrReplace(transform_520)
engine.addEntity(floorBaseGrass_02_22)

const floorBaseGrass_02_23 = new Entity()
floorBaseGrass_02_23.setParent(scene)
floorBaseGrass_02_23.addComponentOrReplace(gltfShape_85)
const transform_521 = new Transform({
  position: new Vector3(104, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_23.addComponentOrReplace(transform_521)
engine.addEntity(floorBaseGrass_02_23)

const floorBaseGrass_02_24 = new Entity()
floorBaseGrass_02_24.setParent(scene)
floorBaseGrass_02_24.addComponentOrReplace(gltfShape_85)
const transform_522 = new Transform({
  position: new Vector3(120, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_24.addComponentOrReplace(transform_522)
engine.addEntity(floorBaseGrass_02_24)

const floorBaseGrass_02_25 = new Entity()
floorBaseGrass_02_25.setParent(scene)
floorBaseGrass_02_25.addComponentOrReplace(gltfShape_85)
const transform_523 = new Transform({
  position: new Vector3(8, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_25.addComponentOrReplace(transform_523)
engine.addEntity(floorBaseGrass_02_25)

const floorBaseGrass_02_26 = new Entity()
floorBaseGrass_02_26.setParent(scene)
floorBaseGrass_02_26.addComponentOrReplace(gltfShape_85)
const transform_524 = new Transform({
  position: new Vector3(24, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_26.addComponentOrReplace(transform_524)
engine.addEntity(floorBaseGrass_02_26)

const floorBaseGrass_02_27 = new Entity()
floorBaseGrass_02_27.setParent(scene)
floorBaseGrass_02_27.addComponentOrReplace(gltfShape_85)
const transform_525 = new Transform({
  position: new Vector3(40, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_27.addComponentOrReplace(transform_525)
engine.addEntity(floorBaseGrass_02_27)

const floorBaseGrass_02_28 = new Entity()
floorBaseGrass_02_28.setParent(scene)
floorBaseGrass_02_28.addComponentOrReplace(gltfShape_85)
const transform_526 = new Transform({
  position: new Vector3(56, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_28.addComponentOrReplace(transform_526)
engine.addEntity(floorBaseGrass_02_28)

const floorBaseGrass_02_29 = new Entity()
floorBaseGrass_02_29.setParent(scene)
floorBaseGrass_02_29.addComponentOrReplace(gltfShape_85)
const transform_527 = new Transform({
  position: new Vector3(72, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_29.addComponentOrReplace(transform_527)
engine.addEntity(floorBaseGrass_02_29)

const floorBaseGrass_02_30 = new Entity()
floorBaseGrass_02_30.setParent(scene)
floorBaseGrass_02_30.addComponentOrReplace(gltfShape_85)
const transform_528 = new Transform({
  position: new Vector3(88, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_30.addComponentOrReplace(transform_528)
engine.addEntity(floorBaseGrass_02_30)

const floorBaseGrass_02_31 = new Entity()
floorBaseGrass_02_31.setParent(scene)
floorBaseGrass_02_31.addComponentOrReplace(gltfShape_85)
const transform_529 = new Transform({
  position: new Vector3(104, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_31.addComponentOrReplace(transform_529)
engine.addEntity(floorBaseGrass_02_31)

const floorBaseGrass_02_32 = new Entity()
floorBaseGrass_02_32.setParent(scene)
floorBaseGrass_02_32.addComponentOrReplace(gltfShape_85)
const transform_530 = new Transform({
  position: new Vector3(120, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_32.addComponentOrReplace(transform_530)
engine.addEntity(floorBaseGrass_02_32)