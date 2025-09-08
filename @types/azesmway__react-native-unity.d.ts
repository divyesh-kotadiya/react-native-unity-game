declare module '@azesmway/react-native-unity' {
  import { Component } from 'react';
  import { ViewProps } from 'react-native';

  export interface UnityViewProps extends ViewProps {
    /**
     * Callback when Unity sends a message back to RN
     */
    onUnityMessage?: (message: string) => void;

    /**
     * Pause Unity player
     */
    pauseUnity?: boolean;

    /**
     * Keep Unity player alive in background (Android only)
     */
    androidKeepPlayerMounted?: boolean;
  }

  export default class UnityView extends Component<UnityViewProps> {}

  export namespace UnityModule {
    /**
     * Send a message from RN → Unity
     * @param gameObject GameObject name in Unity
     * @param methodName Method name inside GameObject script
     * @param message The data to send (string)
     */
    function postMessage(
      gameObject: string,
      methodName: string,
      message: string
    ): void;

    /**
     * Pause Unity player
     */
    function pause(): void;

    /**
     * Resume Unity player
     */
    function resume(): void;

    /**
     * Unload Unity completely
     */
    function unload(): void;
  }
}
