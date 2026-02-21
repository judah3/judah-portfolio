# LoKal LiveTranslate

Desktop app for local, real-time transcription and translation on Windows.

It captures system audio (WASAPI loopback), streams it to a local Python engine, and displays live transcript + translation in an Electron UI.

## What This Project Is

LoKal LiveTranslate is designed for low-latency live language assistance on a single machine:
- Local-first runtime (no required cloud backend for core flow)
- Real-time transcript and translated output
- Configurable models and language directions
- GPU-first defaults (`CUDA`) with CPU fallback

## Primary Use Cases

- Live meetings and calls: transcribe and translate ongoing conversation audio.
- Bilingual support sessions: monitor source speech and translated lines side-by-side.
- Streaming/video monitoring: capture speaker audio output and get live translated text.
- Internal QA/demo tooling: validate transcription/translation behavior with production-like flow.

## Tech Stack

- Electron + React + TypeScript (desktop UI)
- Python engine (`faster-whisper`, `transformers`, `torch`) for transcription + translation
- C# `.NET 8` audio capture service (`NAudio` + WASAPI loopback)
- WebSocket IPC between capture service, engine, and UI

## Architecture

1. Electron launches Python engine (`ws://127.0.0.1:8765`) and C# audio service.
2. Audio service captures output-device audio, resamples to 16kHz mono float32, and streams to Python `/audio`.
3. Python performs streaming transcription stabilization, sentence finalization, and translation.
4. UI listens on Python `/ws` for partial/final events and renders aligned transcript/translation history.

## Repository Layout

```text
live_translate/
  electron-app/
    electron/                 # Main process, preload, child-process orchestration
    src/                      # Renderer app
  audio-service-csharp/src/   # WASAPI loopback capture service
  python-engine/app/          # Core runtime engine
  scripts/                    # Bootstrap + dev/runtime prep scripts
```

## Prerequisites

- Windows 10/11
- Node.js 20+
- Python 3.10+
- .NET SDK 8.0+
- Visual C++ Redistributable (recommended)
- NVIDIA GPU + CUDA drivers (optional but recommended for performance)

## Quick Start (Dev)

From repo root:

```powershell
./scripts/bootstrap.ps1
./scripts/start-dev.ps1
```

`bootstrap.ps1` installs Electron deps, Python venv/deps, and C# restore.

## Windows Installer

Build a packaged installer that bundles:
- Electron app
- Python runtime venv + engine package
- Self-contained C# audio service

```powershell
cd electron-app
npm run dist:win
```

Installer output:

```text
electron-app/release/LoKal-LiveTranslate-Setup-<version>.exe
```

If you want a dedicated distribution folder at repo root, move it to:

```text
installer/
```

## Runtime Notes

- First run can be slower while models are downloaded and cached.
- Audio streaming uses adaptive chunking (normal + fast mode) for better responsiveness under rapid speech.
- UI has loading states for backend startup and capture toggles.
- Window can be set always-on-top while listening.

## Key UI Settings

- Source/target language
- Whisper model
- Translation model
- Compute mode (`CUDA` or `CPU`)
- Output audio device
- NLP and raw-stream view toggles

## Common Events (Python -> UI)

- `status`
- `model_status`
- `transcription_partial`
- `transcription_final`
- `translation_partial`
- `translation_final`
- `error`

## Troubleshooting

- `CUDA` selected but still CPU:
  check `torch.cuda.is_available()` in the same Python environment.
- Repeated/unstable lines:
  verify latest backend changes are running and restart app/backends.
- Missing installer build:
  run `npm run prepare:runtime` before packaging if needed.
