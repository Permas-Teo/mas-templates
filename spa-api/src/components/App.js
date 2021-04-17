import React from "react";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import CardDefault from "./CardDefault";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
      <ReactQueryDevtools initialsIsOpen={false} />
    </QueryClientProvider>
  );
}

function Example() {
  const galleryQueue = useQuery("repoData", () =>
    fetch(
      "https://api.data.gov.sg/v1/environment/2-hour-weather-forecast"
    ).then((res) => res.json())
  );

  if (galleryQueue.isLoading) return "Loading...";

  if (galleryQueue.error)
    return "An error has occurred: " + galleryQueue.error.message;

  console.log(galleryQueue);

  return (
    <div>
      <h3 className="text-center my-5">
        Built with react-query and tailwindcss
      </h3>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
        {galleryQueue.data.items[0].forecasts.map((card, index) => (
          <CardDefault key={index} card={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
