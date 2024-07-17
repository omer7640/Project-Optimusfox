export function User({ userData }) {
  return (
    <div>
      <h2>
        My name is {userData.name} I am {userData.age} and my role is{" "}
        {userData.role}
      </h2>
    </div>
  );
}
