export default function GridBackground() {
  return (
    <div className="absolute h-screen w-full transform-gpu overflow-hidden -z-10">
      <div className="absolute left-0 right-0 top-0 z-0 h-screen"
        style={{ background: "linearGradient(rgb(238, 242, 255), rgb(238, 242, 255) 20 %, rgba(255, 255, 255, 0))" }}></div>
      <div className="absolute left-[40px] right-[40px] top-[-100px] h-[100px] rounded-[50%] shadow-xl"
        style={{ boxShadow: "rgba(30, 64, 175, 0.267) 0px 20px 600px" }}></div>
      <div className="absolute left-0 right-0 h-[800px] overflow-hidden">
        <div className="absolute left-[calc(50%-32px)]">
          <div className="drop-holder relative -left-[360px] -top-[120px] h-[32px] w-[4px]">
            <div className="drop absolute z-10 h-[60px] w-[3px] transform-gpu animate-falldown rounded-[2px] bg-gradient-to-b from-blue-300/10 via-blue-500 via-80% to-blue-900 shadow-lg [animation-delay:1s]"
              style={{ translate: "none", rotate: "none", scale: "none" }}></div>
            <div className="drop-bg absolute -left-32 -top-20 z-0 h-48 w-64 transform-gpu animate-falldown rounded-full bg-gradient-radial from-blue-500/60 via-blue-300/0 via-80% to-blue-300/0 [animation-delay:1s]"
              style={{ translate: "none", rotate: "none", scale: "none" }}></div>
          </div>
        </div>

        <div className="absolute left-[calc(50%-32px)]">
          <div className="drop-holder relative -left-[240px] -top-[120px] h-[32px] w-[4px]">
            <div className="drop absolute z-10 h-[60px] w-[3px] transform-gpu animate-falldown rounded-[2px] bg-gradient-to-b from-violet-300/10 via-violet-500 via-80% to-violet-900 shadow-lg [animation-delay:100ms]"
              style={{ translate: "none", rotate: "none", scale: "none" }}></div>
            <div className="drop-bg absolute -left-32 -top-20 z-0 h-48 w-64 transform-gpu animate-falldown rounded-full bg-gradient-radial from-violet-500/60 via-violet-300/0 via-80% to-violet-300/0 [animation-delay:100ms]"
              style={{ translate: "none", rotate: "none", scale: "none" }}></div>
          </div>
        </div>

        <div className="absolute left-[calc(50%-32px)]">
          <div className="drop-holder relative -left-[120px] -top-[120px] h-[32px] w-[4px]">
            <div className="drop absolute z-10 h-[60px] w-[3px] transform-gpu animate-falldown rounded-[2px] bg-gradient-to-b from-pink-300/10 via-pink-500 via-80% to-pink-900 shadow-lg [animation-delay:800ms]"
              style={{ translate: "none", rotate: "none", scale: "none" }}></div>
            <div className="drop-bg absolute -left-32 -top-20 z-0 h-48 w-64 transform-gpu animate-falldown rounded-full bg-gradient-radial from-pink-500/60 via-pink-300/0 via-80% to-pink-300/0 [animation-delay:800ms]"
              style={{ translate: "none", rotate: "none", scale: "none" }}></div>
          </div>
        </div>

        <div className="absolute left-[calc(50%-32px)]">
          <div className="drop-holder relative -top-[120px] h-[32px] w-[4px]">
            <div className="drop absolute z-10 h-[60px] w-[3px] transform-gpu animate-falldown rounded-[2px] bg-gradient-to-b from-rose-300/10 via-rose-500 via-80% to-rose-900 shadow-lg [animation-delay:320ms]"
              style={{ translate: "none", rotate: "none", scale: "none" }}></div>
            <div className="drop-bg absolute -left-32 -top-20 z-0 h-48 w-64 transform-gpu animate-falldown rounded-full bg-gradient-radial from-rose-500/60 via-rose-300/0 via-80% to-rose-300/0 [animation-delay:320ms]"
              style={{ translate: "none", rotate: "none", scale: "none" }}></div>
          </div>
        </div>

        <div className="absolute left-[calc(50%-32px)]">
          <div className="drop-holder relative -top-[120px] left-[120px] h-[32px] w-[4px]">
            <div className="drop absolute z-10 h-[60px] w-[3px] transform-gpu animate-falldown rounded-[2px] bg-gradient-to-b from-blue-300/10 via-blue-500 via-80% to-blue-900 shadow-lg [animation-delay:360ms]"
              style={{ translate: "none", rotate: "none", scale: "none" }}></div>
            <div className="drop-bg absolute -left-32 -top-20 z-0 h-48 w-64 transform-gpu animate-falldown rounded-full bg-gradient-radial from-blue-500/60 via-blue-300/0 via-80% to-blue-300/0 [animation-delay:360ms]"
              style={{ translate: "none", rotate: "none", scale: "none" }}></div>
          </div>
        </div>

        <div className="absolute left-[calc(50%-32px)]">
          <div className="drop-holder relative -top-[120px] left-[240px] h-[32px] w-[4px]">
            <div className="drop absolute z-10 h-[60px] w-[3px] transform-gpu animate-falldown rounded-[2px] bg-gradient-to-b from-violet-300/10 via-violet-500 via-80% to-violet-900 shadow-lg [animation-delay:240ms]"
              style={{ translate: "none", rotate: "none", scale: "none" }}></div>
            <div className="drop-bg absolute -left-32 -top-20 z-0 h-48 w-64 transform-gpu animate-falldown rounded-full bg-gradient-radial from-violet-500/60 via-violet-300/0 via-80% to-violet-300/0 [animation-delay:240ms]"
              style={{ translate: "none", rotate: "none", scale: "none" }}></div>
          </div>
        </div>

        <div className="absolute left-[calc(50%-32px)]">
          <div className="drop-holder relative -top-[120px] left-[360px] h-[32px] w-[4px]">
            <div className="drop absolute z-10 h-[60px] w-[3px] transform-gpu animate-falldown rounded-[2px] bg-gradient-to-b from-pink-300/10 via-pink-500 via-80% to-pink-900 shadow-lg [animation-delay:960ms]"
              style={{ translate: "none", rotate: "none", scale: "none" }}></div>
            <div className="drop-bg absolute -left-32 -top-20 z-0 h-48 w-64 transform-gpu animate-falldown rounded-full bg-gradient-radial from-pink-500/60 via-pink-300/0 via-80% to-pink-300/0 [animation-delay:960ms]"
              style={{ translate: "none", rotate: "none", scale: "none" }}></div>
          </div>
        </div>
      </div>
      <div className="absolute  z-0 h-screen w-full bg-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAPKADAAQAAAABAAAAPAAAAACL3+lcAAAApUlEQVRoBe3RsQEAIAyEQHX/ndWKIQipviW377815Pa/M6SVzIJ5hXQkLIUlK2FeIR0JS2HJSphXSEfCUliyEuYV0pGwFJashHmFdCQshSUrYV4hHQlLYclKmFdIR8JSWLIS5hXSkbAUlqyEeYV0JCyFJSthXiEdCUthyUqYV0hHwlJYshLmFdKRsBSWrIR5hXQkLIUlK2FeIR0JS2HJGidM+ZTxAGP7BHb8RELaAAAAAElFTkSuQmCC)] bg-center bg-repeat"></div>
    </div>

  )
}
