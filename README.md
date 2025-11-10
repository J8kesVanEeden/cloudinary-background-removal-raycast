# Cloudinary Background Removal - Raycast Extension

Remove backgrounds from images using Cloudinary's AI-powered image processing, directly from Raycast.

## Features

- ✅ **Auto-Detection** - Automatically detects selected files from Finder
- ✅ **Auto-Processing** - Starts processing automatically when file is detected
- ✅ **Smart Fallback** - Tries AI method first, falls back to free methods
- ✅ **Real-Time Progress** - Detailed status updates during each processing stage
- ✅ **Multiple Formats** - Supports PNG, JPG, JPEG, GIF, WEBP
- ✅ **Easy Configuration** - Simple setup via Raycast preferences
- ✅ **Error Handling** - Comprehensive error messages with troubleshooting tips
- ✅ **Completion Screen** - Shows result with quick actions (Open, Show in Finder, Copy Path)

## Installation

1. **Install from Raycast Store** (when published)
   - Open Raycast
   - Go to Extensions → Browse Store
   - Search for "Cloudinary Background Removal"
   - Click Install

2. **Configure Your Credentials**
   - Open Raycast Preferences
   - Go to Extensions → Cloudinary Background Removal
   - Enter your **Cloudinary Cloud Name** (required)
   - Set **Upload Preset** (default: `background_removal_preset`)
   - Set **Output Directory** (default: `~/Downloads`)

## Setup Cloudinary

### 1. Create Cloudinary Account
- Sign up at [cloudinary.com](https://cloudinary.com/users/register_free) (free tier available)
- Get your cloud name from the dashboard

### 2. Create Upload Preset
1. Go to [Cloudinary Console](https://cloudinary.com/console)
2. Navigate to **Settings** → **Upload** → **Upload presets**
3. Click **Add upload preset**
4. Configure:
   - **Preset name**: `background_removal_preset`
   - **Signing mode**: `Unsigned`
5. Click **Save**

## Usage

### Method 1: Auto-Detection (Recommended)
1. Select an image file in **Finder**
2. Open **Raycast** (`Cmd + Space`)
3. Type: `Remove Background`
4. Press Enter
5. The extension will automatically:
   - Detect the selected file from Finder
   - Start processing if preferences are configured
   - Show progress updates
   - Open the result in Preview when complete

### Method 2: Manual File Selection
1. Open Raycast
2. Type: `Remove Background`
3. Click **"Select File from Finder"** (⌘F) or enter the file path manually
4. Click **"Remove Background"** (⌘Enter)

## How It Works

1. **Auto-Detect** - Extension automatically detects selected file from Finder
2. **Validate** - Checks file format, size, and preferences
3. **Upload** - Image is uploaded to Cloudinary using your upload preset
4. **Process** - Background removal is applied (tries 3 methods with automatic fallback)
5. **Download** - Processed PNG image is downloaded
6. **Save** - Image is saved to your configured output directory
7. **Complete** - Result opens automatically in Preview, completion screen shows file details

## Background Removal Methods

The extension tries three methods in order:

1. **AI Background Removal** (`e_background_removal`) - Best quality, requires add-on
2. **Auto-detect** (`e_bgremoval:auto`) - Free, works on uniform backgrounds
3. **Edge-based** (`e_make_transparent`) - Free, edge detection method

## Requirements

- macOS with Raycast installed
- Cloudinary account (free tier works)
- Upload preset created in Cloudinary

## Troubleshooting

### "Configuration error" or "Setup Required"
- Make sure you've set your Cloudinary cloud name in preferences
- Go to Raycast Preferences → Extensions → Cloudinary Background Removal
- The cloud name is required; upload preset and output directory have defaults

### "Upload failed" or "Upload timeout"
- Verify your cloud name is correct (check Cloudinary dashboard)
- Check that the upload preset exists and is set to "Unsigned"
- Ensure you have internet connection
- Check the log file at `~/cloudinary-upload-debug.log` for detailed error information
- Large files (>10MB) are automatically compressed before upload

### "All methods failed"
- Check if your image format is supported (PNG, JPG, JPEG, GIF, WEBP)
- Try a different image (some images work better with different methods)
- Verify your Cloudinary account is active
- The AI method requires a Cloudinary add-on; free methods (auto-detect, edge-based) work without it

### File not detected automatically
- Make sure the file is actually selected in Finder (highlighted)
- Try using the "Select File from Finder" button (⌘F) instead
- Or enter the file path manually in the text field

### Processing takes too long
- Large images may take 30-60 seconds to process
- The extension shows progress updates during each stage
- If it times out, try with a smaller image or check your internet connection

## Development

To develop this extension:

```bash
npm install
npm run dev
```

### Available Scripts

- `npm run dev` - Start development mode with hot reload
- `npm run build` - Build the extension for production
- `npm run lint` - Run ESLint to check code quality
- `npm run fix-lint` - Automatically fix linting issues
- `npm run publish` - Publish to Raycast Store

## License

MIT

## Credits

Created by [Milk Moon Studio](https://www.milkmoonstudio.com)

