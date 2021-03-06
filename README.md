# Getting Started with new project.
# new project: 
npm i -g create-react-app
npx create-react-app frontend_mui_reactjs --template typescript

# vscode extension 
code --install-extension dsznajder.es7-react-js-snippets
code --install-extension vscode-icons-team.vscode-icons
code --install-extension naumovs.color-highlight
code --install-extension esbenp.prettier-vscode
code --install-extension humao.rest-client
code --install-extension riazxrazor.html-to-jsx
code --install-extension christian-kohler.path-intellisense

# install
yarn add @emotion/react @emotion/styled @mui/icons-material @mui/material @mui/x-data-grid
yarn add chart.js react-chartjs-2 @react-hook/debounce react-router-dom @types/react-router-dom
yarn add axios formik formik-material-ui moment react-moment url-join react-number-format
yarn add @types/redux-logger react-redux redux redux-logger redux-thunk url-join @types/url-join react-iframe

# Page Components
// In Pages
cd src/components/pages
yarn add global create-react-component-folder
npx crcf -f --notest --typescript LoginPage RegisterPage AboutUs
npx crcf -f --notest --typescript HomePage UserDashboardPage CoordDashboardPage AdminDashboardPage SuperadminDashboardPage
npx crcf -f --notest --typescript ChangwatProfile TargetAmphoe TargetGroceries TeamRDUProvince TeamRDUAmphoe RDUProvincePlan
npx crcf -f --notest --typescript AdminRegisterPage CoordRegisterPage

# In Layouts
cd src/components/layouts
npx crcf -f --notest --typescript Header Menu

