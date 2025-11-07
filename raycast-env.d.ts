/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Cloudinary Cloud Name - Your Cloudinary cloud name (found in dashboard) */
  "cloudName": string,
  /** Upload Preset - Upload preset name (default: background_removal_preset) */
  "uploadPreset": string,
  /** Output Directory - Where to save processed images */
  "outputDirectory": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `remove-background` command */
  export type RemoveBackground = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `remove-background` command */
  export type RemoveBackground = {}
}

