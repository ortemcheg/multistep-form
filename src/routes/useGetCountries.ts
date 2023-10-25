import { useEffect, useState } from "react";
import { COUNTRIES_API_ENDPOINT } from "../constants";
import { z } from "zod";

const countrySchema = z.object({
  name: z.object({
    common: z.string(),
  }),
});

const countriesApiDataSchema = z.array(countrySchema);

export type Countries =
  | {
      status: "idle" | "pending";
      data: undefined;
    }
  | {
      status: "success";
      data: string[];
    }
  | {
      status: "error";
      data: null;
    };

const useGetCountries = (): Countries => {
  const [result, setResult] = useState<Countries>({
    status: "idle",
    data: undefined,
  });

  useEffect(() => {
    (async () => {
      if (result.status !== "idle") return;
      setResult({ status: "pending", data: undefined });
      const resp = await fetch(COUNTRIES_API_ENDPOINT);
      if (resp.ok) {
        try {
          const rawData: Promise<unknown> = await resp.json();
          const countriesInfo = countriesApiDataSchema.parse(rawData);
          const countries = countriesInfo
            .map((country) => country.name.common)
            .sort();
          setResult({ status: "success", data: countries });
        } catch (e) {
          // log error
          console.error("Unexpected data format", e);
          setResult({ status: "error", data: null });
        }
      } else {
        // log error
        console.error("The API server is down");
        setResult({ status: "error", data: null });
      }
    })();
  }, [result.status]);

  return result;
};

export default useGetCountries;
