/* eslint-env jest */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from '@jest/globals';
import Historias from './Historias';

describe('Historias', () => {
  test('renderiza todos los títulos de historias', () => {
    render(<Historias />);


    expect(screen.getByText('AdoptApp: Pasillos llenos de sonrisas')).toBeInTheDocument();
    expect(screen.getByText('Voluntarios: Héroes anónimos')).toBeInTheDocument();
    expect(screen.getByText('2024: Un año récord para las adopciones')).toBeInTheDocument();
    expect(screen.getByText('Sobrepoblación : La Esterilización Salva Vidas')).toBeInTheDocument();
  });

  test('renderiza la cantidad correcta de artículos', () => {
    render(<Historias />);
    const articulos = screen.getAllByRole('article');
    expect(articulos).toHaveLength(4);
  });

  test('renderiza imágenes correspondientes a cada historia', () => {
    render(<Historias />);
    const imagenes = screen.getAllByRole('img');
    expect(imagenes).toHaveLength(4);

    expect(imagenes[0]).toHaveAttribute('alt', 'AdoptApp: Pasillos llenos de sonrisas');
    expect(imagenes[1]).toHaveAttribute('alt', 'Voluntarios: Héroes anónimos');
    expect(imagenes[2]).toHaveAttribute('alt', '2024: Un año récord para las adopciones');
    expect(imagenes[3]).toHaveAttribute('alt', 'Sobrepoblación : La Esterilización Salva Vidas');
  });

  test('cada historia contiene título y contenido', () => {
    render(<Historias />);

    const titulos = screen.getAllByRole('heading', { level: 2 });
    const parrafos = screen.getAllByText((_, node) => node?.tagName === 'P');

    expect(titulos).toHaveLength(4);
    expect(parrafos.length).toBeGreaterThanOrEqual(4);
  });
});