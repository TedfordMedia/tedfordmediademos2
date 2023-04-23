import create from 'zustand'

let useSceneStore = create(set => ({
  greenTargets: true,
  redTargets: true,
  skin: true,
  skinOpacty: 0.2,
  brainOpacity: 1,
  brain: true,
  boneOpacity: 1,
  boneDecal: false,
  decalFlip: false,
  ambientIntensity: 0.25,
  directionalIntensity: 0.8,
  lightingOpen: false,
  opacityOpen: true,
  bottomPanelOpen: false,
  botPosX: 0,
  botPosY: 0,
  botPosZ: 0,
  botRotX: 0,
  botRotY: 0,
  botRotZ: 0,
  botScaleX: 1,
  botScaleY: 1,
  botScaleZ: 1,
  controls: null,
  selectedMarker: null,
  chosenMarkerColor: 'cyan',
  transformType: 'translate',
  camSubject: {
    position: [20, 0, 35],
    target: [0, 0, 0]
  },
  modelMarkers: [],
  canvasClicked: () => set((state) => ({ lightingOpen: false }))
}))

export default useSceneStore;
