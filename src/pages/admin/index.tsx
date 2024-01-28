import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function ResizableDemo() {
    return (
        <div className="flex flex-col items-center justify-start">
            <div className="overflow-hidden w-full ">
                <ResizablePanelGroup direction="horizontal" className="min-h-[200px] mx-auto">
                    <ResizablePanel defaultSize={9} minSize={1} maxSize={10} className="min-w-12">
                        <div className="flex h-full items-center justify-center p-6">
                            <span className="font-semibold">Sidebar</span>
                        </div>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={75} className="min-w-[150px] sm:w-3/4">
                        <div className="flex h-full items-center justify-center p-6">
                            <span className="font-semibold">Content</span>
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </div>
    );
}
