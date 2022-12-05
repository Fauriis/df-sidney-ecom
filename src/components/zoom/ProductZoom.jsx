import Image from 'next/image';
import {
  TransformWrapper,
  TransformComponent,
} from '@pronestor/react-zoom-pan-pinch';
import { MdZoomOutMap } from 'react-icons/md';
import { useRouter } from 'next/router';
import { useProduct } from '../../hooks';
import { BiLoaderCircle } from 'react-icons/bi';

export const ProductZoom = () => {
  const router = useRouter();
  const { pid } = router.query;
  const { product, status } = useProduct(pid);
  if (product === null && status !== '404') {
    return (
      <div className="flex h-screen w-screen justify-center items-center">
        <BiLoaderCircle size="48" className="animate-spin"></BiLoaderCircle>
      </div>
    );
  }

  if (status === '404') {
    return <span>product not found</span>;
  }

  const { title, image } = product;

  return (
    <TransformWrapper
      initialPositionX={650}
      initialPositionY={650}
      initialScale={1}
    >
      {({ zoomIn, zoomOut }) => (
        <>
          <div className="flex items-end justify-end flex-col">
            <button title="Zoom In" onClick={() => zoomIn()}>
              <MdZoomOutMap size={30}></MdZoomOutMap>
            </button>
            <button title="Zoom Out" onClick={() => zoomOut()}></button>
          </div>

          <TransformComponent>
            <Image
              alt={`Image of ${title}`}
              src={image}
              width="650"
              height="650"
              className="block"
              objectFit="contain"
            ></Image>
          </TransformComponent>
        </>
      )}
    </TransformWrapper>
  );
};
