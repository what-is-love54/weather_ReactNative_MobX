# Android

# Generating an upload key

You can generate a private signing key using keytool.

On macOS, if you're not sure where your JDK bin folder is, then perform the following command to find it: `/usr/libexec/java_home`

It will output the directory of the JDK, which will look something like this: `/Library/Java/JavaVirtualMachines/jdkX.X.X_XXX.jdk/Contents/Home`

Navigate to that directory by using the command cd /your/jdk/path and use the keytool command with sudo permission as shown below.
`sudo keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000`

# Setting up Gradle variables

1. Place the my-upload-key.keystore file under the android/app directory in your project folder.
1. Edit the file `~/.gradle/gradle.properties` or `android/gradle.properties`, and add the following (replace **\*** with the correct keystore password, alias and key password),

`MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore`
`MYAPP_UPLOAD_KEY_ALIAS=my-key-alias`
`MYAPP_UPLOAD_STORE_PASSWORD=***** `
`MYAPP_UPLOAD_KEY_PASSWORD=*****`

# Generating Build

The generated AAB can be found under android/app/build/outputs/bundle/release/app-release.aab

`cd android`
`./gradlew bundleRelease`

# IOS

1. To configure your app to be built using the Release scheme, go to `Product → Scheme → Edit Scheme`. Select the Run tab in the sidebar, then set the Build Configuration dropdown to Release

<img src="docs/img/editScheme.png" alt="Employee App" style="width: 100%;" />

1. Okay now open your Project in Xcode and click on `“Signing & Capabilities”`.

<img src="docs/img/Signing.png" alt="Employee App" style="width: 100%;" />

1. Select your Team.
1. Add the Bundle Identifier you created previously and wait for Xcode to automatically manage signing, by creating a Provisioning Profile and required Certificates.

1. Select `Any iOS Device (arm64, armv7)` from build target and got to
   `Product -> Archive`.

<img src="docs/img/archive.png" alt="Employee App" style="width: 100%;" />

And let's wait till Xcode archives a build.
Okay once Xcode is done archiving you will be taken to 4-5 wizardly steps before you upload it to App Store.
