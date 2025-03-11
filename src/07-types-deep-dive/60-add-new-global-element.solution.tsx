declare global {
  namespace JSX {
    interface IntrinsicElements {
      "something-solution": {
        id: string;
      },
      myNewElement: {
     foo: string;
    }
    }
  }
}

<>
  <something-solution id="123" />

  {/* @ts-expect-error */}
  <something-solution />

  {/* @ts-expect-error */}
  <something-solution id={123} />
</>;
