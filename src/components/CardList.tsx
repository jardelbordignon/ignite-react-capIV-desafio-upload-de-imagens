import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE

  // TODO SELECTED IMAGE URL STATE
  const [imageUrl, setImageUrl] = useState('');

  // TODO FUNCTION HANDLE VIEW IMAGE
  const hanldeViewImage = useCallback((url: string) => {
    setImageUrl(url);
  }, []);

  return (
    <>
      {/* TODO CARD GRID */}
      <SimpleGrid columns={3} gap="40px">
        {cards.map(card => (
          <Card key={card.id} data={card} viewImage={hanldeViewImage} />
        ))}
      </SimpleGrid>

      {/* TODO MODALVIEWIMAGE */}
      <ModalViewImage
        isOpen={!!imageUrl}
        imgUrl={imageUrl}
        onClose={() => setImageUrl('')}
      />
    </>
  );
}
