/* eslint-env jest */

import { beforeEach, describe, jest, test, expect } from '@jest/globals';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CatCard from './CatCard';

// Limpia localStorage y mocks antes de cada test
beforeEach(() => {
  localStorage.clear();
  jest.clearAllMocks();
});

describe('CatCard', () => {
  const defaultProps = {
    name: 'Mishi',
    breed: 'Siamés',
    imageUrl: 'https://example.com/gato.jpg',
    onAdoptClick: jest.fn(),
    onRemoveFavorite: jest.fn(),
  };

  test('renderiza nombre, raza, imagen y botón correctamente', () => {
    render(<CatCard {...defaultProps} />);

    expect(screen.getByText('Mishi')).toBeInTheDocument();
    expect(screen.getByText('Siamés')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', defaultProps.imageUrl);
    expect(screen.getByRole('button', { name: /adóptame/i })).toBeInTheDocument();
  });

 test('añade el gato a favoritos al hacer clic en el corazón', () => {
  render(<CatCard {...defaultProps} />);
  
  const heartIcon = screen.getByTestId('heart-icon'); // mejor selector
  fireEvent.click(heartIcon);

  // Esperar hasta que se actualice localStorage
  const favs = JSON.parse(localStorage.getItem('favCats')) || [];

  expect(Array.isArray(favs)).toBe(true);
  expect(favs).toHaveLength(1);
  expect(favs[0]).toEqual({
    name: 'Mishi',
    breed: 'Siamés',
    imageUrl: 'https://example.com/gato.jpg',
  });
});


test('ejecuta onRemoveFavorite si está en vista de favoritos', () => {
  render(<CatCard {...defaultProps} isFavoriteView={true} />);

  const heartIcon = screen.getByTestId('heart-icon');
  fireEvent.click(heartIcon);

  expect(defaultProps.onRemoveFavorite).toHaveBeenCalledTimes(1);
});


  test('usa imagen por defecto si la imagen original falla', () => {
    render(<CatCard {...defaultProps} />);
    
    const img = screen.getByRole('img');
    fireEvent.error(img);

    expect(img.src).toContain('https://placehold.co');
  });
});
