# 1. Usando los tipos genéricos de React

```typescript
import { Dispatch, SetStateAction } from 'react';

interface Props {
  setState: Dispatch<SetStateAction<number>>; // Para useState
  setCount: Dispatch<SetStateAction<number>>;
  setName: Dispatch<SetStateAction<string>>;
  setData: Dispatch<SetStateAction<Data>>; // Para objetos
}
```
# 2. Ejemplo completo

```typescript
import { Dispatch, SetStateAction } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  setCount: Dispatch<SetStateAction<number>>;
  setName: Dispatch<SetStateAction<string>>;
  setUser: Dispatch<SetStateAction<User>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const MyComponent: React.FC<Props> = ({ 
  setCount, 
  setName, 
  setUser, 
  setIsLoading 
}) => {
  // Tu componente aquí
  return (
    <div>
      {/* ... */}
    </div>
  );
};
```

# 4. Ejemplo práctico de uso

```typescript
import { Dispatch, SetStateAction, useState } from 'react';

// Componente padre
const ParentComponent = () => {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [user, setUser] = useState<User | null>(null);

  return (
    <ChildComponent 
      setCount={setCount}
      setName={setName}
      setUser={setUser}
    />
  );
};

// Componente hijo
interface ChildProps {
  setCount: Dispatch<SetStateAction<number>>;
  setName: Dispatch<SetStateAction<string>>;
  setUser: Dispatch<SetStateAction<User | null>>;
}

const ChildComponent: React.FC<ChildProps> = ({ 
  setCount, 
  setName, 
  setUser 
}) => {
  const handleClick = () => {
    setCount(prev => prev + 1); // ✅ Funciona
    setName('Nuevo nombre'); // ✅ Funciona
    setUser({ id: 1, name: 'Juan', email: 'juan@email.com' }); // ✅ Funciona
  };

  return <button onClick={handleClick}>Actualizar</button>;
};
```

# 5. para estados complejos

```typescript
interface ComplexState {
  items: string[];
  loading: boolean;
  error: string | null;
}

interface Props {
  setComplexState: Dispatch<SetStateAction<ComplexState>>;
}

// Uso con actualización parcial
setComplexState(prev => ({
  ...prev,
  loading: true,
  error: null
}));
```