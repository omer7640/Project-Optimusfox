export function User({ userData }) {
  const { name, age, role } = userData;
  return (
    <div>
      <h2>
        My name is {name} I am {age} and my role is
        {role}
      </h2>
    </div>
  );
}
