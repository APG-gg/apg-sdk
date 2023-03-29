import React, { FC, useRef, useState } from "react";
import move from "../../utils/move";
import { CardProps } from '../Card/CardBase';
import Card from '../Card/Card';
import { motion } from 'framer-motion';

export interface CardStackProps {
  cards: CardProps[];
}

const CardStack: FC<CardStackProps> = ({ cards }) => {
  const [stack, setCards] = useState(cards);

  const constraintsRef = useRef(null);

  const CARD_OFFSET = 80;
  const SCALE_FACTOR = 0.05;

  const moveToEnd = (from: number) => {
    setCards(move({ array: stack, moveIndex: from, toIndex: stack.length - 1 }));
  };

  return (
    <div
      ref={constraintsRef}
      className='relative w-[650px] h-[480px] mx-auto mt-8'
    >
      {stack.map((card: CardProps, index) => {
        const canDrag = index === 0;

        return (
          <motion.div
            key={card.id}
            initial={false}
            className="absolute w-[360px] h-[480px] cursor-grab"
            style={{
              transformOrigin: "top center",
              filter: index !== 0 ? "blur(2px)" : "none",
              y: 0
            }}
            animate={{
              y: index * 10,
              left: (index * -CARD_OFFSET) + 290,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: stack.length - index
            }}
            drag={canDrag ? "y" : false}
            dragConstraints={constraintsRef}
            onDragEnd={() => moveToEnd(index)}
          >
            <Card {...card} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default CardStack;
