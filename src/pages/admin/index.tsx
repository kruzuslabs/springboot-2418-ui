import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function ResizableDemo() {
    return (
        <div className="flex flex-col items-center justify-start">
            <div className="overflow-hidden w-full">
                <ResizablePanelGroup direction="horizontal" className="max-h-full">
                    <ResizablePanel defaultSize={9} minSize={5} maxSize={10} className="min-w-12 border border-gray-300">
                        <div className="flex h-full items-center justify-center p-6">
                            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                                aca
                            </h4>
                        </div>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={75} className="min-w-[150px] sm:w-3/4 border border-gray-300">
                        <div className="flex h-full items-center justify-center p-6">
                            <span className="font-semibold">Content</span>
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </div>
    );
}

