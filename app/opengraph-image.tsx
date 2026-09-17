import { ImageResponse } from "next/og";
import { company } from "@/lib/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #065E96 0%, #0776BD 55%, #38BDF8 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 32,
          }}
        >
          <svg width="72" height="96" viewBox="0 0 252.8 338.66">
            <path
              fill="#ED2D27"
              d="M-0 101l129.04 1.04 -49.65 85.66c0,0 -4.67,8.17 -3.79,0.29 0.87,-7.88 5.25,-85.24 -20.44,-61.89 -25.68,23.36 -51.37,88.16 -51.37,88.16 0,0 -1.5,3.17 -3.8,0.63l0 -113.89zm38.97 159.66c6.21,0 11.24,5.42 11.24,12.11 0,6.69 -5.03,12.12 -11.24,12.12 -6.2,0 -11.24,-5.43 -11.24,-12.12 0,-6.69 5.04,-12.11 11.24,-12.11zm79.21 -24.82l-118.18 101.3 0 -69.3c7.98,-32.5 21.28,-76.63 38.54,-97.67 29.13,-35.53 15.91,32.36 16.34,34.45 0.44,2.09 -12.84,53.7 -5.25,47.28 7.59,-6.42 65.38,-105.96 65.38,-105.96 0,0 4.67,-5.54 3.21,2.63 -1.41,7.89 -15.6,69.36 -0.04,87.27z"
            />
            <path
              fill="#FFFFFF"
              d="M252.8 236.14l-129.03 -1.03 49.65 -85.66c0,0 4.67,-8.18 3.79,-0.3 -0.87,7.89 -5.25,85.24 20.44,61.89 25.68,-23.35 51.37,-88.16 51.37,-88.16 0,0 1.5,-3.17 3.79,-0.63l0 113.89zm-45.41 -183.89c6.2,0 11.24,5.43 11.24,12.12 0,6.69 -5.04,12.11 -11.24,12.11 -6.21,0 -11.24,-5.42 -11.24,-12.11 0,-6.69 5.03,-12.12 11.24,-12.12zm-72.76 49.05l118.17 -101.3 0 69.3c-7.97,32.5 -21.27,76.63 -38.53,97.67 -29.13,35.53 -15.91,-32.35 -16.34,-34.44 -0.44,-2.09 12.84,-53.71 5.25,-47.29 -7.59,6.42 -65.38,105.96 -65.38,105.96 0,0 -4.67,5.54 -3.21,-2.63 1.41,-7.89 15.6,-69.36 0.04,-87.27z"
            />
          </svg>
          <span
            style={{
              fontSize: 40,
              fontWeight: 700,
              color: "#FFFFFF",
            }}
          >
            {company.name}
          </span>
        </div>

        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: "#FFFFFF",
            textAlign: "center",
            maxWidth: 900,
          }}
        >
          {company.tagline}
        </div>

        <div
          style={{
            fontSize: 26,
            color: "rgba(255,255,255,0.85)",
            marginTop: 20,
          }}
        >
          Pulsa & Data · Voucher Game · PPOB · E-Wallet
        </div>
      </div>
    ),
    { ...size },
  );
}
