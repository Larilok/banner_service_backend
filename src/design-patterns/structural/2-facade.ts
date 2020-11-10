declare class VideoFile { }
// ...

declare class OggCompressionCodec { }
// ...

declare class MPEG4CompressionCodec { }
// ...

declare class CodecFactory { }
// ...

declare class BitrateReader { }
// ...

declare class AudioMixer { }
// ...


// We create a facade class to hide the framework's complexity
// behind a simple interface. It's a trade-off between
// functionality and simplicity.
class VideoConverter {
  constructor() {}

  convert(filename: string, format: string):File {
      const file = new VideoFile(filename)
      const sourceCodec = new CodecFactory.extract(file)
      let destinationCodec:any
      if (format == "mp4")
          destinationCodec = new MPEG4CompressionCodec()
      else
          destinationCodec = new OggCompressionCodec()
      const buffer = BitrateReader.read(filename, sourceCodec)
      let result = BitrateReader.convert(buffer, destinationCodec)
      result = (new AudioMixer()).fix(result)
      return new File(result)
  }
}
// Application classes don't depend on a billion classes
// provided by the complex framework. Also, if you decide to
// switch frameworks, you only need to rewrite the facade class.
const convertor = new VideoConverter()
const mp4 = convertor.convert("funny-cats-video.ogg", "mp4")
mp4.save()