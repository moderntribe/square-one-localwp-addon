# SquareOne Local Add-on

This Local addon allows you to use the [SquareOne](https://github.com/moderntribe/square-one) WordPress development framework with [Local](https://localwp.com/).

  


## Installation
### Clone

Clone the repository into the following directory depending on your platform:

- macOS: `~/Library/Application Support/Local/addons`
- Windows: `C:\Users\username\AppData\Roaming\Local\addons`
- Debian Linux: `~/.config/Local/addons`

*You can replace 'Local' with 'Local Beta' if you want to create the add-on for Local Beta.*

### Install Add-on Dependencies

`yarn install` or `npm install`

### Add Add-on to Local

1. Clone repo directly into the add-ons folder (paths described above)
2. `yarn install` or `npm install` (install dependencies)
3. `yarn build` or `npm run build`
4. Open Local and enable add-on

## Development

### Folder Structure

All files in `/src` will be transpiled to `/lib` using [TypeScript](https://www.typescriptlang.org/). Anything in `/lib` will be overwritten.

## Project Setup

- Active the plugin
- Add a new site.
- Clone the new SquareOne project following the normal SquareOne procedures into the sites `/public` folder.
- Go to Utilities tab for SquareOne site and click the **Apply Nginx Config files**.
- Add the below lines to the projects `.env`:

`.env`

```sh
DISABLE_OBJECT_CACHE=true
DB_NAME=local
DB_USER=root
DB_PASSWORD=root
DB_HOST=localhost
DB_TABLE_PREFIX=wp_
```
