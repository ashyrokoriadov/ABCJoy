export interface HttpResponse {
  ok: boolean;
  redirected: boolean;
  status: number;
  statusText: string;
  type: string;
  url: string;
  json(): string[];
  text(): string;
}
