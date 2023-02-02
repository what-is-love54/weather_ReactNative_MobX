## Installing Dependencies

When installing new dependencies, it’s best to follow the instructions from that dependency. Often they might ask you to go into some native files located under `ios` and `android` and update them, but also do stuff like run `cd ios/ && pod install && cd ../` or `cd android/ ./gradlew clean` after installing them via `yarn`.

Some dependencies also require you to clear your cache with `yarn run reinstall-all-dependencies` or `yarn run clear-release-android` . Worst case, you just need to try different things if the app is not building like you expect after bringing in a new dependency until it works. Also, you can ask another developer on this project to try installing the dep and see if they run into the same issues you are seeing.
