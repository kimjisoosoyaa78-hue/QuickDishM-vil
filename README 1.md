# QuickDish Móvil — Guía rápida para correr el proyecto

## 1. Requisitos
- Node.js instalado (ya lo tienes, usado en los módulos backend de QuickDish).
- Android Studio instalado, con al menos un emulador creado (AVD Manager > Create Device).
- Visual Studio Code.

## 2. Crear el proyecto Expo
Abre una terminal en VS Code y ejecuta:

```
npx create-expo-app quickdish-movil
cd quickdish-movil
npm install @react-navigation/native @react-navigation/native-stack
npx expo install react-native-screens react-native-safe-area-context
```

## 3. Copiar el código
Reemplaza el `App.js` generado por el de esta carpeta, y crea la carpeta
`screens/` con los 4 archivos: `Login.js`, `Home.js`, `Detail.js`, `Order.js`.

## 4. Ejecutar en el emulador de Android Studio
1. Abre Android Studio > Device Manager > inicia un emulador (por ejemplo, Pixel 6, API 34).
2. En la terminal de VS Code, dentro de la carpeta del proyecto:
   ```
   npx expo start
   ```
3. Cuando aparezca el menú de Expo en la terminal, presiona la tecla `a`
   para abrir la app automáticamente en el emulador de Android que ya está encendido.

## 5. Capturas para la evidencia
Toma pantallazos de:
- El emulador corriendo la pantalla de Login, Home, Detail y Order.
- VS Code con el código abierto (para la sección "Módulos codificados").
- Android Studio con el SDK Manager abierto (Android SDK) y "About Android Studio"
  para mostrar la versión (para la sección "Ambientes de desarrollo").
- VS Code > Help > About para la versión del editor.
