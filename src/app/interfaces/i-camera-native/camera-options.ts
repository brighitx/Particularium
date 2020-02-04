export interface CameraOptions {
    quality?: number;
    destinationType?: number;
    sourceType?: number;
    allowEdit?: boolean;
    encodingType?: number;
    targetWidth?: number;
    targetHeight?: number;
    mediaType?: number;
    correctOrientation?: boolean;
    saveToPhotoAlbum?: boolean;
    cameraDirection?: number;
    popoverOptions?: CameraPopoverOptions;
}