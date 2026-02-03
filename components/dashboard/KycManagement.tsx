"use client"
import React, { useState, useMemo } from "react";
import {
  Search,
  Download,
  Eye,
  CheckCircle2,
  XCircle,
  User,
  Building2,
  ChevronLeft,
  ChevronRight,
  FileText,
  X,
  Check,
  CheckCheck,
} from "lucide-react";

// --- Types ---
type KYCType = "Individual" | "Business";
type KYCStatus = "Pending" | "Approved" | "Declined";

interface KYCRequest {
  id: string;
  type: KYCType;
  applicant: string;
  docsCount: number;
  email: string;
  phone: string;
  bankAcct: string;
  submittedAt: string;
  status: KYCStatus;
}

// --- Mock Data ---
const MOCK_DATA: KYCRequest[] = Array(8)
  .fill({
    id: "KYC-001",
    applicant: "John Adebayo",
    docsCount: 2,
    email: "john.adebayo@email.com",
    phone: "+234 801 234 5678",
    bankAcct: "123456789012",
    submittedAt: "1/7/2026, 8:30:00 AM",
    status: "Pending",
  })
  .map((item, index) => ({
    ...item,
    type: index % 4 === 1 || index % 4 === 3 ? "Business" : "Individual",
  }));

export const KYCQueueManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRequest, setSelectedRequest] = useState<KYCRequest | null>(
    null,
  );
  const [showSuccess, setShowSuccess] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Handlers
  const handleOpenDetails = (req: KYCRequest) => setSelectedRequest(req);
  const handleAccept = () => {
    setSelectedRequest(null);
    setShowSuccess(true);
  };

  return (
    <div className="min-h-screen  text-white font-outfit">
      {/* Header */}
      {/* <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">KYC Queue</h1>
        <p className="text-sm text-gray-dark">
          Review and approve identity verification requests
        </p>
      </div> */}

      {/* Filters Bar */}
      {/* <div className="bg-[#0B0E14] border border-gray-800 rounded-xl p-4 mb-6 flex justify-between items-center">
        <div className="relative w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-dark w-4 h-4" />
          <input
            type="text"
            placeholder="Search by email, ID, name"
            className="w-full bg-[#05070A] border border-gray-800 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-primary transition-colors"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-3">
          <select className="bg-[#05070A] border border-gray-800 rounded-lg px-4 py-2 text-sm focus:outline-none">
            <option>All Request</option>
          </select>
          <button className="flex items-center gap-2 bg-[#D4A757] text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#b88f46] transition-colors">
            <Download className="w-4 h-4" /> Export CSV
          </button>
        </div>
      </div> */}

      {/* Table Section */}
      <div className="bg-secondary  rounded-xl overflow-hidden ">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-[11px] uppercase tracking-wider text-white border-b border-[#D6D6D6]/40">
              <th className="px-6 py-4 font-medium">ID</th>
              <th className="px-6 py-4 font-medium">Type</th>
              <th className="px-6 py-4 font-medium">Applicant</th>
              <th className="px-6 py-4 font-medium">Contact</th>
              <th className="px-6 py-4 font-medium text-center">Status</th>
              <th className="px-6 py-4 font-medium text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#D6D6D6]/40">
            {MOCK_DATA.map((req, i) => (
              <tr
                key={i}
                className="hover:bg-white/[0.02] transition-colors group"
              >
                <td className="px-6 py-5 text-sm font-medium text-gray-200">
                  {req.id}
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-2 text-sm">
                    {req.type === "Individual" ? (
                      <User className="w-4 h-4 text-gray-dark" />
                    ) : (
                      <Building2 className="w-4 h-4 text-gray-dark" />
                    )}
                    {req.type}
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="text-sm font-medium text-gray-200">
                    {req.applicant}
                  </div>
                  <div className="text-[11px] text-gray-dark">
                    {req.docsCount} documents
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="text-sm text-gray-300">{req.email}</div>
                  <div className="text-[11px] text-gray-dark">{req.phone}</div>
                </td>
                <td className="px-6 py-5 text-center">
                  <span className="bg-[#3b3a21] text-[#eab308] px-3 py-1 rounded text-[10px] font-bold">
                    {req.status}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => handleOpenDetails(req)}
                      className="p-1.5 bg-gray-800/50 rounded hover:bg-gray-700 text-gray-400"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleOpenDetails(req)}
                      className="p-1.5 bg-gray-800/50 rounded hover:bg-green-900/30 text-green-500"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 bg-gray-800/50 rounded hover:bg-red-900/30 text-red-500">
                      <XCircle className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="p-4 border-t border-gray-800 flex justify-between items-center">
          <div className="flex gap-2">
            {[1, 2, 3, "...", 8, 9, 10].map((p, i) => (
              <button
                key={i}
                className={`w-8 h-8 rounded flex items-center justify-center text-xs font-medium transition-colors ${p === 1 ? "bg-[#D4A757] text-white" : "hover:bg-gray-800 text-gray-400"}`}
              >
                {p}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-2 bg-[#D4A757] text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-[#b88f46]">
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* --- MODAL 1: KYC DETAILS --- */}
      {selectedRequest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#D7D7D7]/60 backdrop-blur-sm p-4">
          <div className="bg-secondary border border-gray-800 w-full max-w-md rounded-lg overflow-hidden shadow-2xl">
            <div className="p-5 border-b border-gray-800 flex justify-between items-center">
              <h2 className="text-lg font-bold text-white">
                KYC Details - {selectedRequest.id}
              </h2>
              <button
                onClick={() => setSelectedRequest(null)}
                className="text-gray-500 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <p className="text-xs text-gray-dark uppercase tracking-widest mb-4">
                  Applicant Information
                </p>
                <div className="space-y-3 text-sm">
                  <div className="">
                    <span className="text-gray-dark">Type:</span>{" "}
                    <span className="font-semibold text-white">
                      {selectedRequest.type}
                    </span>
                  </div>
                  <div className="">
                    <span className="text-gray-dark">Name:</span>{" "}
                    <span className="font-semibold text-white">
                      {selectedRequest.applicant}
                    </span>
                  </div>
                  <div className="">
                    <span className="text-gray-dark">Email:</span>{" "}
                    <span className="text-white">{selectedRequest.email}</span>
                  </div>
                  <div className="">
                    <span className="text-gray-dark">Phone Number:</span>{" "}
                    <span className="text-white">{selectedRequest.phone}</span>
                  </div>
                  <div className="">
                    <span className="text-gray-dark">Bank Acct:</span>{" "}
                    <span className="text-white">
                      {selectedRequest.bankAcct}
                    </span>
                  </div>
                  <div className="">
                    <span className="text-gray-dark">Submitted:</span>{" "}
                    <span className="text-white">
                      {selectedRequest.submittedAt}
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-800">
                <p className="text-xs text-gray-dark uppercase tracking-widest mb-4">
                  Document
                </p>
                <div className="space-y-3">
                  {["CAC. pdf", "National identity Card. pdf"].map(
                    (doc, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3  border border-[#E6E6E6] rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-red-600 p-2 rounded text-[10px] font-bold text-white">
                            PDF
                          </div>
                          <div>
                            <p className="text-xs text-white font-medium">
                              {doc}
                            </p>
                            <p className="text-[10px] text-gray-dark">10 MB</p>
                          </div>
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <button
                  onClick={handleAccept}
                  className="flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white py-3 rounded text-sm font-bold transition-all"
                >
                  <CheckCircle2 className="w-4 h-4" /> Accept KYC
                </button>
                <button
                  onClick={() => setSelectedRequest(null)}
                  className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-3 rounded text-sm font-bold transition-all"
                >
                  <XCircle className="w-4 h-4" /> Decline KYC
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- MODAL 2: SUCCESS --- */}
      {showSuccess && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#D7D7D7]/60 backdrop-blur-sm p-4">
          <div className="bg-secondary  w-full max-w-sm rounded p-8 text-center shadow-2xl relative">
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute top-4 right-4 text-gray-dark hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
                <div className="relative bg-primary w-16 h-16 rounded-full flex items-center justify-center border-4 border-[#121417]">
                  <Check className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
            <h2 className="text-xl font-bold text-white mb-2">
              KYC Successfully Approved
            </h2>
            <p className="text-sm text-gray-dark mb-8 leading-relaxed">
              John Adebayo's KYC has been approved. <br /> John will be notified
              via mail
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="w-1/2 bg-primary text-white py-3 rounded font-bold hover:bg-[#b88f46] transition-colors"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
