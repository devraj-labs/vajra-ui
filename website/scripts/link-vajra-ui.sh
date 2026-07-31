#!/usr/bin/env bash
# vajra-ui is NOT a normal dependency in website/package.json — it's not
# possible to depend on it via yarn's "file:.." protocol, because yarn
# classic (1.x) COPIES the target directory for file: deps rather than
# symlinking. Since website/ lives inside the vajra-ui repo, that copy
# recursively includes website/ itself, which includes node_modules/vajra-ui,
# which includes website/ again — infinite self-nesting that exhausted disk
# space the first time this was tried (grew to 3GB+ before being caught).
#
# The fix: a real symlink (not yarn's copy) from website/node_modules/vajra-ui
# to the repo root, created here as a postinstall step so `yarn install`
# always leaves it in a working state instead of needing to be run once and
# never touched again.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WEBSITE_DIR="$(dirname "$SCRIPT_DIR")"
LINK_PATH="$WEBSITE_DIR/node_modules/vajra-ui"
TARGET="../.."

mkdir -p "$WEBSITE_DIR/node_modules"

if [ -L "$LINK_PATH" ] && [ "$(readlink "$LINK_PATH")" = "$TARGET" ]; then
  exit 0
fi

rm -rf "$LINK_PATH"
ln -s "$TARGET" "$LINK_PATH"
echo "Linked website/node_modules/vajra-ui -> repo root"
