import { Button } from "@/app/_components/ui/button"

export default function FirstPost() {
  return (
            <div className="flex min-h-screen  items-center justify-center bg-zinc-50 font-sans dark:bg-black">
              <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <h1 className="text-3xl font-bold mb-4 text-red-500">First Post</h1>
                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                  <Button variant="outline">
                    Back to Home 
                  </Button>
                </div>
              </main>
            </div>
            
  );
}