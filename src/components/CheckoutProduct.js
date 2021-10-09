import React from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';

function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) {
  const dispatch = useDispatch();

  const removeItemFromBasket = () => dispatch(removeFromBasket({ id }));

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    };

    //push item into redux
    dispatch(addToBasket(product));
  };

  return (
    <div className='grid grid-cols-5'>
      <Image src={image} height={200} width={200} objectFit='contain' />

      <div className='col-span-3 mx-5'>
        <p>{title}</p>
        <div className='flex'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className='h-5 text-yellow-500' />
            ))}
        </div>
        <p className='text-xs my-2 line-clamp-3'>{description}</p>
        <Currency quantity={price} currency='GBP' />

        {hasPrime && (
          <div className='flex items-center space-x-2'>
            <img
              className='w-12'
              loading='lazy'
              src='https://links.papareact.com/fdw'
              alt=''
            />
            <p className='text-cs text-gray-500'>FREE Next-day delivery</p>
          </div>
        )}
      </div>
      {/* Right add/remove buttons */}
      <div className='flex flex-col space-y-2 my-auto justify-self-end'>
        <button className='button' onClick={addItemToBasket}>
          Add to basket
        </button>
        <button className='button' onClick={removeItemFromBasket}>
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
