printf 'copy files'
mkdir ../$1
cp -R -f .github ../$1/.github
cp -R -f .storybook ../$1/.storybook
cp -R -f dist ../$1/dist
cp -R -f example ../$1/example
cp -R -f src ../$1/src
cp -R -f stories ../$1/stories
cp -R -f test ../$1/test
cp .gitignore ../$1/.gitignore

cp LICENSE ../$1/LICENSE
cp package.json ../$1/package.json
cp README.md ../$1/README.md
cp tsconfig.json ../$1/tsconfig.json
cp yarn.lock ../$1/yarn.lock
printf 'copy node_modules'
cp -R node_modules ../$1/node_modules

cp clone.sh ../$1/clone.sh

sed -i'' -e 's/firestore-link/$1/g' ../$1/package.json
sed -i'' -e 's/firestore-link/$1/g' ../$1/clone.sh

