import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  return (
    <Modal closeOnOverlayClick isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent w="auto" h="auto" maxH="600px" maxW="900px" bg="pGray.900">
        <ModalBody
          p="0"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image src={imgUrl} maxH="600px" maxW="900px" borderTopRadius="6px" />
        </ModalBody>

        <ModalFooter
          bg="pGray.800"
          borderRadius="0 0 6px 6px"
          justifyContent="flex-start"
        >
          <Link href={imgUrl} isExternal>
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
