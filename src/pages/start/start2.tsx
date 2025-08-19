// pages/start/ui/Start.tsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { fetchGameData } from '@/features/game/model/thunks';
import { startGame } from '@/features/game/model/gameSlice';

const Start = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { categories, loading, error } = useAppSelector(state => state.game);

  // Загружаем данные при первом рендере
  useEffect(() => {
    dispatch(fetchGameData());
  }, [dispatch]);

  const handleCategoryClick = (id: string) => {
    dispatch(startGame(id));
    navigate('/game');
  };

  if (loading) return <p>Загрузка категорий...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div>
      <h1>Выберите категорию</h1>
      <ul>
        {categories.map(cat => (
          <li key={cat.id}>
            <button onClick={() => handleCategoryClick(cat.id)}>
              {cat.category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Start;
