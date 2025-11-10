# Changelog

All notable changes to this extension will be documented in this file.

## [1.0.0] - 2024-11-07

### Added
- Initial release of Cloudinary Background Removal extension
- **Auto-detection**: Automatically detects selected files from Finder on extension open
- **Auto-processing**: Starts background removal automatically when file is detected and preferences are configured
- **Smart fallback system**: Tries three methods in order:
  - AI Background Removal (`e_background_removal`) - Best quality, requires add-on
  - Auto-detect (`e_bgremoval:auto`) - Free, works on uniform backgrounds
  - Edge-based (`e_make_transparent`) - Free, edge detection method
- **Real-time progress updates**: Detailed status messages for each processing stage (validating, uploading, processing, downloading, saving)
- **Format support**: PNG, JPG, JPEG, GIF, WEBP
- **User preferences**: Configurable Cloudinary cloud name, upload preset, and output directory
- **File validation**: Automatic MIME type checking, size validation, and format verification
- **Automatic compression**: Large files (>10MB) are compressed before upload
- **Error handling**: Comprehensive error messages with troubleshooting tips and log file location
- **Completion screen**: Shows result with file size and quick actions (Open, Show in Finder, Copy Path)
- **Diagnostic logging**: Detailed upload logs saved to `~/cloudinary-upload-debug.log` for troubleshooting

