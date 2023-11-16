import ContentLoader from 'react-content-loader';

function PizzaLoading() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="138" cy="129" r="119" />
      <rect x="0" y="274" rx="0" ry="0" width="280" height="23" />
      <rect x="0" y="315" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="419" rx="4" ry="4" width="81" height="32" />
      <rect x="117" y="413" rx="20" ry="20" width="161" height="44" />
    </ContentLoader>
  );
}

export default PizzaLoading;
